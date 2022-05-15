import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
