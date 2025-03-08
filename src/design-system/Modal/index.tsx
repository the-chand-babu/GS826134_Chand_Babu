import { IconButton, Modal } from "@mui/material";
import { CSSProperties, ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";

interface customModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactElement;
  heading: string;
  width?: string | number;
  height?: string | number;
  isHeaderDisable?: boolean;
  className?: string;
}

const CustomModal = ({
  open,
  handleClose,
  children,
  heading,
  width,
  height,
  isHeaderDisable,
  className,
}: customModalProps) => {
  const modalStyle: CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };
  return (
    <Modal open={open} onClose={handleClose} id="modal-container">
      <div
        id="custom-modal-wrapper"
        style={modalStyle}
        className={className ?? ""}
      >
        {isHeaderDisable ? null : (
          <div className="title-container">
            <p className="modal-title">{heading}</p>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        )}

        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
