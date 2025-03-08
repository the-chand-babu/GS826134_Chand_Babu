import { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "./Form";
import { storeData } from "../../data/store";
import CustomModal from "../../design-system/Modal";
import { GridTable } from "../../design-system/TableGrid";
import "./style.css";

const StorePage = () => {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [rowData, setRowData] = useState(storeData ?? []);
  const [isEditStore, setIsEditStore] = useState<any>(null);

  const handleDelete = async (rowToDelete: any) => {
    setRowData((prevData: any) =>
      prevData.filter((item: any) => item["Seq No"] !== rowToDelete["Seq No"])
    );
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
                setIsEditStore(params.data);
                setIsModalOPen(true);
              }}
            />
          </div>
        );
      },
    },
    {
      headerName: "S.No",
      valueGetter: (params: any) => {
        return params.data["Seq No"];
      },
      rowDrag: true,
    },
    { headerName: "Store", field: "Label" },
    { headerName: "City", field: "City" },
    { headerName: "State", field: "State" },
  ];

  return (
    <div id="planing-container">
      <CustomModal
        open={isModalOpen}
        handleClose={() => setIsModalOPen(false)}
        heading="Add Store Details"
        height={350}
        width={700}
      >
        <div className="store-form-container">
          <Form
            isEditStore={isEditStore}
            setIsEditStore={setIsEditStore}
            setIsModalOPen={setIsModalOPen}
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
        New Store
      </Button>
    </div>
  );
};

export default StorePage;
