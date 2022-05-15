import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PICKUPLOCATION_TITLE_FIELD } from "./PickupLocationTitle";
import { SERVICEPOINT_TITLE_FIELD } from "../servicePoint/ServicePointTitle";

export const PickupLocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery Price" source="deliveryPrice" />
        <TextField label="Description" source="description" />
        <TextField label="Geo Location" source="geoLocation" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Service Point"
          source="servicepoint.id"
          reference="ServicePoint"
        >
          <TextField source={SERVICEPOINT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tenant Id" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PickupSlot"
          target="PickupLocationId"
          label="Pickup Slots"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Cut Off Time" source="cutOffTime" />
            <TextField label="Date" source="date" />
            <TextField label="Day" source="day" />
            <TextField label="Delivery Price" source="deliveryPrice" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Booked" source="isBooked" />
            <TextField label="Order Quota" source="orderQuota" />
            <TextField label="Picking Price" source="pickingPrice" />
            <ReferenceField
              label="Pickup Location"
              source="pickuplocation.id"
              reference="PickupLocation"
            >
              <TextField source={PICKUPLOCATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Service Point"
              source="servicepoint.id"
              reference="ServicePoint"
            >
              <TextField source={SERVICEPOINT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Slot Type" source="slotType" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Tenant Id" source="tenantId" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Valid From" source="validFrom" />
            <TextField label="Valid To" source="validTo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
