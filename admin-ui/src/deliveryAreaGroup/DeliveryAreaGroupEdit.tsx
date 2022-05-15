import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryAreaTitle } from "../deliveryArea/DeliveryAreaTitle";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const DeliveryAreaGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="deliveryAreas"
          reference="DeliveryArea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryAreaTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="servicepoint.id"
          reference="ServicePoint"
          label="Service Point"
        >
          <SelectInput optionText={ServicePointTitle} />
        </ReferenceInput>
        <TextInput label="Tenant Id" source="tenantId" />
      </SimpleForm>
    </Edit>
  );
};
