import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PickupSlotTitle } from "../pickupSlot/PickupSlotTitle";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const PickupLocationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Delivery Price" source="deliveryPrice" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Geo Location" source="geoLocation" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="pickupSlots"
          reference="PickupSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PickupSlotTitle} />
        </ReferenceArrayInput>
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
