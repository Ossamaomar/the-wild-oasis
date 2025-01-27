import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    data: {
      email,
      user_metadata: { fullname: currentFullName },
    },
  } = useUser();

  const [fullname, setFullname] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const { updateUserMutateFn, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (fullname)
      updateUserMutateFn(
        { fullname, avatar },
        {
          onSuccess: () => {
            setFullname("");
            setAvatar(null);
            e.target.reset();
          },
        }
      );
  }
  function handleCancel() {
    setFullname(currentFullName);
    setAvatar(null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullname}
          disabled={isUpdating}
          onChange={(e) => setFullname(e.target.value)}
          id="fullname"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          disabled={isUpdating}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isUpdating} type="reset" variation="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
