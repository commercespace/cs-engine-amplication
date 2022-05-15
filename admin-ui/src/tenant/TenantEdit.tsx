import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="servicePoints"
          reference="ServicePoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServicePointTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="tenantType"
          label="Tenant Type"
          choices={[
            { label: "Dedicated Host Dedicated DB (DH_DD)", value: "DH_DD" },
            { label: "Dedicated Host Shared DB (DH_SD)", value: "DH_SD" },
            { label: "Shared Host Shared DB (SH_SD)", value: "SH_SD" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
