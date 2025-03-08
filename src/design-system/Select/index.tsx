import {
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ComponentType } from "react";
import ArrowSvg from "@mui/icons-material/ArrowDropDown";
import "./style.css";

type customSelectProps = {
  onChange: (value: SelectChangeEvent<string>) => void;
  heading?: string;
  value: string;
  error?: { message?: string; ref?: { name?: string }; type?: string };
  menuProps: {
    id: string | number;
    value: string;
    title: string;
  }[];
  onApiCall?: (value?: string) => void;
  loading?: boolean;
  placeholder?: string;
  isHideEndIcon?: boolean;
  StartIcon?: ComponentType;
};

const CustomSelect = ({
  heading,
  value,
  onChange,
  menuProps,
  error,
  onApiCall,
  loading,
  placeholder,
  isHideEndIcon,
  StartIcon,
}: customSelectProps) => {
  const ArrowIcon = () =>
    isHideEndIcon ? (
      <></>
    ) : (
      <div className="arrow-icon-select">
        <ArrowSvg fill="var(--color-primary-text)" />
      </div>
    );
  return (
    <div id="custom-select-wrapper">
      {heading ? <p>{heading}</p> : null}
      {!value && placeholder && <p id="state-select-label">{placeholder}</p>}

      <Select
        id="custom-select-field"
        value={value || ""}
        onChange={onChange}
        error={!!error}
        IconComponent={ArrowIcon}
        MenuProps={{
          classes: {
            root: "custom-mui-select-popper-wrapper",
          },
        }}
        onOpen={() => onApiCall?.(heading)}
        renderValue={(selected: string) => <div>{selected}</div>}
        // placeholder={``}
        labelId="state-select-label"
        startAdornment={StartIcon ? <StartIcon /> : null}
      >
        {loading ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <CircularProgress style={{ color: "#6b4de6" }} />
          </div>
        ) : (
          menuProps?.map(
            (item: { id: string | number; value: string; title: string }) => (
              <MenuItem
                value={item.value}
                key={item.id}
                className="menu-item-text"
              >
                {item.title}
              </MenuItem>
            )
          )
        )}
      </Select>
      {!!error && <p className="error-message-helper-text">{error?.message}</p>}
    </div>
  );
};

export default CustomSelect;
