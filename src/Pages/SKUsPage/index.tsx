import { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "./Form";
import { skusData } from "../../data/skuData";
import CustomModal from "../../design-system/Modal";
import { GridTable } from "../../design-system/TableGrid";
import "./style.css";

const SKUPage = () => {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [rowData, setRowData] = useState(skusData ?? []);
  const [isEditSkus, setIsEditSkus] = useState<any>(null);

  const handleDelete = (data: any) => {
    setRowData((prev) => prev.filter((item: any) => item.ID !== data.ID));
  };

  const columnDefs = [
    {
      headerName: "",
      field: "actions",
      width: 120,
      cellRenderer: (params: any) => {
        return (
          <div className="action-container">
            <DeleteIcon
              sx={{ color: "grey" }}
              onClick={() => {
                handleDelete(params.data);
              }}
            />
            <EditIcon
              sx={{ color: "grey" }}
              onClick={() => {
                setIsEditSkus(params.data);
                setIsModalOPen(true);
              }}
            />
          </div>
        );
      },
    },
    {
      headerName: "SKU",
      field: "Label",
    },
    { headerName: "Price", field: "Price" },
    { headerName: "Cost", field: "Cost" },
  ];
  // console.log("===========", rowData);
  return (
    <div id="planing-container">
      <CustomModal
        open={isModalOpen}
        handleClose={() => setIsModalOPen(false)}
        heading="Add Skus Details"
        height={350}
        width={700}
      >
        <div className="store-form-container">
          <Form
            isEditSkus={isEditSkus}
            setIsEditSkus={setIsEditSkus}
            setIsModalOpen={setIsModalOPen}
            setRowData={setRowData}
          />
        </div>
      </CustomModal>
      <div className="table-container">
        <GridTable rowData={rowData} columnDefs={columnDefs} />
      </div>
      <Button
        variant="contained"
        className="add-btn"
        onClick={() => setIsModalOPen(true)}
      >
        New Skus
      </Button>
    </div>
  );
};

export default SKUPage;
