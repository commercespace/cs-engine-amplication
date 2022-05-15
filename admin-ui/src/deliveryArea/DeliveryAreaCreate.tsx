import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeliveryAreaGroupTitle } from "../deliveryAreaGroup/DeliveryAreaGroupTitle";
import { DeliverySlotTitle } from "../deliverySlot/DeliverySlotTitle";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const DeliveryAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="deliveryareagroup.id"
          reference="DeliveryAreaGroup"
          label="Delivery Area Group"
        >
          <SelectInput optionText={DeliveryAreaGroupTitle} />
        </ReferenceInput>
        <NumberInput label="Delivery Price" source="deliveryPrice" />
        <ReferenceArrayInput
          source="deliverySlots"
          reference="DeliverySlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliverySlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Geo Location" source="geoLocation" />
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
    </Create>
  );
};
