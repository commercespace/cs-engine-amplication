import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryAreaGroupTitle } from "../deliveryAreaGroup/DeliveryAreaGroupTitle";
import { DeliveryAreaTitle } from "../deliveryArea/DeliveryAreaTitle";
import { DeliverySlotTitle } from "../deliverySlot/DeliverySlotTitle";
import { PickupLocationTitle } from "../pickupLocation/PickupLocationTitle";
import { PickupSlotTitle } from "../pickupSlot/PickupSlotTitle";
import { ProductTitle } from "../product/ProductTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ServicePointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="deliveryAreaGroups"
          reference="DeliveryAreaGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryAreaGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="deliveryAreas"
          reference="DeliveryArea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryAreaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="deliverySlots"
          reference="DeliverySlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliverySlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Ghana Post GPS" source="ghanaPostGps" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="pickupLocations"
          reference="PickupLocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PickupLocationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="pickupSlots"
          reference="PickupSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PickupSlotTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
