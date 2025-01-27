/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({cabinToEdit = {}, onCloseModal}) {
  
  const {id:editId, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  
  const {isCreating, createCabinMutateFn} = useCreateCabin();
  const {isEditing, editCabinMutateFn} = useEditCabin();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    console.log(data)
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if(isEditSession) {
      editCabinMutateFn({newCabinData : {...data, image}, id:editId}, {
        onSuccess: () => reset()
      })
    }
    else {
      createCabinMutateFn({...data, image}, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        }
      })
    }
  }

  function onError(error) {
    console.log(error);
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
      <FormRow label={"Cabin Name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This input field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Max Capacity"} error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This input field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Regular Price"} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This input field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Discount Price"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This input field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "The discount price should be less than the regular price",
          })}
        />
      </FormRow>

      <FormRow
        label={"Description For Website"}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This input field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Cabin Photo"} error={false}>
        <FileInput id="image" accept="image/*" {...register("image", {
            required: isEditSession ? false : "This input field is required",
          })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating}>{isEditSession ? "Edit Cabin" : "Create Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
