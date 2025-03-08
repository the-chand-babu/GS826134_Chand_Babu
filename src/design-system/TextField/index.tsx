import { ChangeEventHandler, ComponentType } from "react";
import { InputAdornment, TextField } from "@mui/material";
// import { checkCircle } from "@assets/onboarding";
import "./style.css";

type FieldDetails = {
  heading?: string;
  placeholder?: string;
  error?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: any;
  onBlur?: any;
  name?: string;
  onValidate?: () => void;
  onCancelValidate?: () => void;
  validateStatus?: "validating" | "validated" | "none";
  disabled?: boolean;
  StartIcon?: ComponentType;
  EndIcon?: ComponentType;
  className?: string;
  type?: string;
};

const CustomTextField: React.FC<FieldDetails> = ({
  heading,
  placeholder,
  value,
  onChange,
  error,
  name = "",
  onValidate,
  onCancelValidate,
  validateStatus = "none",
  disabled = false,
  StartIcon,
  EndIcon,
  className,
  type,
}) => {
  return (
    <div id="custom-textField-wrapper">
      {heading ? <p className="text-field-heading">{heading}</p> : null}
      <div className="input-button-wrapper">
        <TextField
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          className={`${className} text-field-input-field`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          slotProps={{
            input: {
              startAdornment: StartIcon && (
                <InputAdornment position="start">
                  <StartIcon />
                </InputAdornment>
              ),
              endAdornment: EndIcon && (
                <InputAdornment position="start">
                  <EndIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        {validateStatus === "validating" && (
          <div className="validate-status">
            <span>Validating PAN...</span>
            <button className="cancel-button" onClick={onCancelValidate}>
              Cancel
            </button>
          </div>
        )}
        {validateStatus === "validated" && (
          <div className="validated-state">
            <div className="check-icon">
              {/* <img src={checkCircle} alt="Checked circle" /> */}
            </div>
            <span className="validated-text">Validated</span>
          </div>
        )}
        {validateStatus === "none" && onValidate && (
          <button className="validate-button" onClick={onValidate}>
            Validate
          </button>
        )}
      </div>
      {error && <p className="error-message-helper-text">{error?.message}</p>}
    </div>
  );
};
export default CustomTextField;
