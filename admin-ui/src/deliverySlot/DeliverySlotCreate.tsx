import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { DeliveryAreaTitle } from "../deliveryArea/DeliveryAreaTitle";
import { ServicePointTitle } from "../servicePoint/ServicePointTitle";

export const DeliverySlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Cut Off Time" source="cutOffTime" />
        <DateInput label="Date" source="date" />
        <TextInput label="Day" source="day" />
        <ReferenceInput
          source="deliveryarea.id"
          reference="DeliveryArea"
          label="Delivery Area"
        >
          <SelectInput optionText={DeliveryAreaTitle} />
        </ReferenceInput>
        <NumberInput label="Delivery Price" source="deliveryPrice" />
        <TextInput label="End Time" source="endTime" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Booked" source="isBooked" />
        <NumberInput step={1} label="Order Quota" source="orderQuota" />
        <NumberInput label="Picking Price" source="pickingPrice" />
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
        <DateTimeInput label="Valid To" source="validTo" />
      </SimpleForm>
    </Create>
  );
};
