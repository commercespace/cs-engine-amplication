import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="servicepoint.id"
          reference="ServicePoint"
          label="ServicePoint"
        >
          <SelectInput optionText={ServicePointTitle} />
        </ReferenceInput>
        <TextInput label="Tenant Id" source="tenantId" />
      </SimpleForm>
    </Edit>
  );
};
