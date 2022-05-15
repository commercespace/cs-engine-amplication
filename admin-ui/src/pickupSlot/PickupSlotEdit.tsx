import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PickupLocationTitle } from "../pickupLocation/PickupLocationTitle";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const PickupSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cut Off Time" source="cutOffTime" />
        <DateInput label="Date" source="date" />
        <TextInput label="Day" source="day" />
        <NumberInput label="Delivery Price" source="deliveryPrice" />
        <TextInput label="End Time" source="endTime" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Booked" source="isBooked" />
        <NumberInput step={1} label="Order Quota" source="orderQuota" />
        <NumberInput label="Picking Price" source="pickingPrice" />
        <ReferenceInput
          source="pickuplocation.id"
          reference="PickupLocation"
          label="Pickup Location"
        >
          <SelectInput optionText={PickupLocationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="servicepoint.id"
          reference="ServicePoint"
          label="Service Point"
        >
          <SelectInput optionText={ServicePointTitle} />
        </ReferenceInput>
        <SelectInput
          source="slotType"
          label="Slot Type"
          choices={[
            { label: "Re-Current", value: "RE_CURRENT" },
            { label: "Absolute", value: "ABSOLUTE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Start Time" source="startTime" />
        <TextInput label="Tenant Id" source="tenantId" />
        <DateInput label="Valid From" source="validFrom" />
        <DateInput label="Valid To" source="validTo" />
      </SimpleForm>
    </Edit>
  );
};
