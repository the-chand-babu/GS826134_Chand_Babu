import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomTextField from "../../../design-system/TextField";
import "./style.css";

interface StoreProps {
  isEditSkus?: any;
  setIsEditSkus?: (value: any) => void;
  setIsModalOpen: (value: boolean) => void;
  setRowData: (value: any) => void;
}

const Form: React.FC<StoreProps> = ({
  isEditSkus,
  setIsEditSkus,
  setIsModalOpen,
  setRowData,
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      ID: "",
      Label: "",
      Price: undefined,
      Cost: undefined,
    },
  });

  const onSubmit = (data: any) => {
    if (isEditSkus) {
      setRowData((prev: any) =>
        prev.map((item: any) => (item.ID === isEditSkus.ID ? data : item))
      );
      setIsEditSkus?.(null);
    } else {
      setRowData((prev: any) => [data, ...prev]);
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isEditSkus) reset(isEditSkus);
  }, [isEditSkus, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="ID"
              render={({ field }) => (
                <CustomTextField
                  heading="SKU"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

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
        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="Price"
              render={({ field }) => (
                <CustomTextField
                  heading="Price"
                  value={field.value}
                  onChange={field.onChange}
                  type="number"
                />
              )}
            />
          </div>
        </div>

        <div className="col-6 col-md-6 col-sm-12">
          <div className="field-wrapper">
            <Controller
              control={control}
              name="Cost"
              render={({ field }) => (
                <CustomTextField
                  heading="Cost"
                  value={field.value}
                  onChange={field.onChange}
                  type="number"
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="btn btn-primary mt-3">
          {isEditSkus ? "Update Skus" : "Add Skus"}
        </button>
      </div>
    </form>
  );
};

export default Form;
