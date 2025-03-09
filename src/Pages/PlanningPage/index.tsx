import { useEffect, useState } from "react";
import { GridTable } from "../../design-system/TableGrid";
import { salesData, weekMapping } from "../../data/planingData";
import "./style.css";
import CustomTextField from "../../design-system/TextField";

const SalesUnitsRenderer = (props: any) => {
  const { value, rowIndex, monthKey, weekKey, api } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    console.log("onChange working:", newValue);
    props.updateRowData((prevData: any) => {
      const updatedData = [...prevData];
      if (
        updatedData[rowIndex] &&
        updatedData[rowIndex][monthKey] &&
        updatedData[rowIndex][monthKey][weekKey]
      ) {
        updatedData[rowIndex][monthKey][weekKey] = {
          ...updatedData[rowIndex][monthKey][weekKey],
          salesUnits: newValue,
        };
      }
      return updatedData;
    });
  };

  return <CustomTextField value={value} onChange={handleChange} />;
};

const PlaningPage = () => {
  const [rowData, setRowData] = useState<any>([]);
  const [columnDefs, setColumnDefs] = useState<any>([]);

  useEffect(() => {
    const aggregatedData = salesData.reduce((acc: any, item: any) => {
      const mapping = weekMapping.find((m) => m.Week === item.Week);
      if (!mapping) return acc; // Skip if no mapping is found

      const monthKey = mapping["Month Label"].toLowerCase();
      const weekNumber = "week" + parseInt(item.Week.substring(1), 10);
      const uniqueKey: any = `${item.Store}_${item.SKU}`;

      if (!acc[uniqueKey]) {
        acc[uniqueKey] = {
          store: item.Store,
          sku: item.SKU,
        };
      }
      if (!acc[uniqueKey][monthKey]) {
        acc[uniqueKey][monthKey] = {};
      }
      acc[uniqueKey][monthKey][weekNumber] = {
        salesUnits: item["Sales Units"],
        salesDollars: item["Sales Dollars"],
        gmDollars: item["GM Dollars"],
        gmPercent: item["GM %"],
      };

      return acc;
    }, {});

    const finalData = Object.values(aggregatedData);
    setRowData(finalData);
    console.log("Aggregated Data:", finalData);
  }, []);

  // Build dynamic column definitions based on weekMapping
  useEffect(() => {
    const baseColumns = [
      { headerName: "Store", field: "store", pinned: "left" },
      { headerName: "SKU", field: "sku", pinned: "left" },
    ];

    const monthMap = weekMapping.reduce((acc, mapping) => {
      const monthKey = mapping["Month Label"].toLowerCase();
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(mapping);
      return acc;
    }, {} as Record<string, any[]>);

    const monthColumns = Object.entries(monthMap).map(
      ([monthKey, mappings]) => {
        const monthLabel = mappings[0]["Month Label"];

        const sortedMappings = mappings.sort(
          (a, b) =>
            parseInt(a.Week.substring(1), 10) -
            parseInt(b.Week.substring(1), 10)
        );

        const weekGroups = sortedMappings.map((mapping) => {
          const weekLabel = mapping["Week Label"];
          const weekKey = "week" + parseInt(mapping.Week.substring(1), 10);

          const metricColumns = [
            {
              headerName: "Sales Units",
              field: `${monthKey}.${weekKey}.salesUnits`,
              sort: "desc",
              // Use cellRendererFramework to render a React component.
              cellRendererFramework: (params: any) => (
                <SalesUnitsRenderer
                  value={params.value}
                  rowIndex={params.rowIndex}
                  monthKey={monthKey}
                  weekKey={weekKey}
                  updateRowData={setRowData}
                />
              ),
            },
            {
              headerName: "Sales Dollars",
              field: `${monthKey}.${weekKey}.salesDollars`,
            },
            {
              headerName: "GM Dollars",
              field: `${monthKey}.${weekKey}.gmDollars`,
            },
            {
              headerName: "GM Percent",
              field: `${monthKey}.${weekKey}.gmPercent`,
              cellRenderer: (params: any) => {
                const value = params.value
                  ? parseFloat(params.value.replace("%", ""))
                  : 0;
                let bgColor = "";
                if (value >= 40) {
                  bgColor = "green";
                } else if (value >= 10 && value < 40) {
                  bgColor = "yellow";
                } else if (value > 5 && value < 10) {
                  bgColor = "orange";
                } else if (value <= 5) {
                  bgColor = "red";
                }
                return (
                  <div
                    style={{
                      backgroundColor: bgColor,
                      padding: "5px",
                      height: "100%",
                    }}
                  >
                    {params.value}
                  </div>
                );
              },
            },
          ];

          return {
            headerName: weekLabel,
            children: metricColumns,
          };
        });

        return {
          headerName: monthLabel,
          children: weekGroups,
        };
      }
    );

    setColumnDefs([...baseColumns, ...monthColumns]);
  }, []);

  console.log("Column Definitions:", columnDefs);

  return (
    <div id="planing-container">
      <GridTable rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default PlaningPage;
