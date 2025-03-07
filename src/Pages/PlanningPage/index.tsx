import { useState } from "react";
import { GridTable } from "../../components/design-system/TableGrid";
import "./style.css";

const PlaningPage = () => {
  const [rowData] = useState([
    {
      store: "Nashville Melody Music Store",
      sku: "Rugged Utility Jacket",
      jan: {
        week1: {
          salesUnits: 200,
          salesDollars: 8998,
          gmDollars: 8512,
          gmPercent: "94.60%",
        },
        week2: {
          salesUnits: 0,
          salesDollars: 0,
          gmDollars: 8512,
          gmPercent: "94.60%",
        },
      },
      feb: {
        week1: {
          salesUnits: 15,
          salesDollars: 675,
          gmDollars: 600,
          gmPercent: "88.89%",
        },
        week2: {
          salesUnits: 0,
          salesDollars: 0,
          gmDollars: 0,
          gmPercent: "0.00%",
        },
      },
    },
    {
      store: "Chicago Charm Boutique",
      sku: "Floral Chiffon Wrap Dress",
      jan: {
        week1: {
          salesUnits: 200,
          salesDollars: 29998,
          gmDollars: 27689.6,
          gmPercent: "54.30%",
        },
        week2: {
          salesUnits: 0,
          salesDollars: 0,
          gmDollars: 27689.6,
          gmPercent: "54.30%",
        },
      },
      feb: {
        week1: {
          salesUnits: 22,
          salesDollars: 2599,
          gmDollars: 2400,
          gmPercent: "92.31%",
        },
        week2: {
          salesUnits: 10,
          salesDollars: 980,
          gmDollars: 900,
          gmPercent: "91.84%",
        },
      },
    },
    {
      store: "Miami Breeze Apparel",
      sku: "Lace-Up Combat Boots",
      jan: {
        week1: {
          salesUnits: 199,
          salesDollars: 4973.01,
          gmDollars: 31.95,
          gmPercent: "0.60%",
        },
        week2: {
          salesUnits: 14,
          salesDollars: 349.86,
          gmDollars: 31.95,
          gmPercent: "0.60%",
        },
      },
      feb: {
        week1: {
          salesUnits: 8,
          salesDollars: 168,
          gmDollars: 12,
          gmPercent: "7.14%",
        },
        week2: {
          salesUnits: 20,
          salesDollars: 440,
          gmDollars: 40,
          gmPercent: "9.09%",
        },
      },
    },
    // ...Add more rows as needed
  ]);
  const [columnDefs] = useState([
    { headerName: "Store", field: "store", pinned: "left" },
    { headerName: "SKU", field: "sku", pinned: "left" },
    {
      headerName: "Jan",
      children: [
        {
          headerName: "Week 01",
          children: [
            {
              headerName: "Sales Units",
              field: "jan.week1.salesUnits",
              sort: "desc",
            },
            { headerName: "Sales Dollars", field: "jan.week1.salesDollars" },
            { headerName: "GM Dollars", field: "jan.week1.gmDollars" },
            { headerName: "GM Percent", field: "jan.week1.gmPercent" },
          ],
        },
        {
          headerName: "Week 02",
          children: [
            { headerName: "Sales Units", field: "jan.week2.salesUnits" },
            { headerName: "Sales Dollars", field: "jan.week2.salesDollars" },
            { headerName: "GM Dollars", field: "jan.week2.gmDollars" },
            { headerName: "GM Percent", field: "jan.week2.gmPercent" },
          ],
        },
      ],
    },
    {
      headerName: "Feb",
      children: [
        {
          headerName: "Week 01",
          children: [
            { headerName: "Sales Units", field: "feb.week1.salesUnits" },
            { headerName: "Sales Dollars", field: "feb.week1.salesDollars" },
            { headerName: "GM Dollars", field: "feb.week1.gmDollars" },
            { headerName: "GM Percent", field: "feb.week1.gmPercent" },
          ],
        },
        {
          headerName: "Week 02",
          children: [
            { headerName: "Sales Units", field: "feb.week2.salesUnits" },
            { headerName: "Sales Dollars", field: "feb.week2.salesDollars" },
            { headerName: "GM Dollars", field: "feb.week2.gmDollars" },
            { headerName: "GM Percent", field: "feb.week2.gmPercent" },
          ],
        },
      ],
    },
  ]);

  return (
    <div id="planing-container">
      <GridTable rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default PlaningPage;
