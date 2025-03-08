import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomTextField from "../../../design-system/TextField";
import "./style.css";

interface storeProps {
  isEditStore?: any;
  setIsEditStore?: (value: any) => void;
  setIsModalOPen: (value: boolean) => void;
  setRowData: (value: any) => void;
}

const Form = ({
  isEditStore,
  setIsEditStore,
  setIsModalOPen,
  setRowData,
}: storeProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      "Seq No": "",
      Label: "",
      City: "",
      State: "",
    },
  });

  const onSubmit = (data: any) => {
    if (isEditStore) {
      setRowData((prev: any) =>
        prev.map((item: any) => (item.ID === isEditStore.ID ? data : item))
      );
      setIsEditStore?.(null);
    } else {
      setRowData((prev: any) => [data, ...prev]);
    }
    setIsModalOPen(false);
  };

  useEffect(() => {
    if (isEditStore) reset(isEditStore);
  }, [isEditStore, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Seq No Field */}
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="Seq No"
              render={({ field: { onChange, value, ...rest } }) => (
                <CustomTextField
                  heading="Seq No"
                  value={value}
                  // Convert the input value to a number before updating the state.
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    onChange(
                      inputValue === "" ? undefined : Number(inputValue)
                    );
                  }}
                  type="number"
                  {...rest}
                />
              )}
            />
          </div>
        </div>

        {/* Label Field (Store) */}
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="Label"
              render={({ field }) => (
                <CustomTextField
                  heading="Label"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        {/* City Field */}
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="City"
              render={({ field }) => (
                <CustomTextField
                  heading="City"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* State Field */}
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="State"
              render={({ field }) => (
                <CustomTextField
                  heading="State"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="btn btn-primary mt-3">
          {isEditStore ? "Update Store" : "Add Store"}
        </button>
      </div>
    </form>
  );
};

export default Form;
