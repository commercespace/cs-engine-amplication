import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SERVICEPOINT_TITLE_FIELD } from "./ServicePointTitle";
import { DELIVERYAREAGROUP_TITLE_FIELD } from "../deliveryAreaGroup/DeliveryAreaGroupTitle";
import { DELIVERYAREA_TITLE_FIELD } from "../deliveryArea/DeliveryAreaTitle";
import { PICKUPLOCATION_TITLE_FIELD } from "../pickupLocation/PickupLocationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ServicePointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="Ghana Post GPS" source="ghanaPostGps" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DeliveryAreaGroup"
          target="ServicePointId"
          label="Delivery Area Groups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DeliveryArea"
          target="ServicePointId"
          label="DeliveryAreas"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Delivery Area Group"
              source="deliveryareagroup.id"
              reference="DeliveryAreaGroup"
            >
              <TextField source={DELIVERYAREAGROUP_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DeliverySlot"
          target="ServicePointId"
          label="Delivery Slots"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Cut Off Time" source="cutOffTime" />
            <TextField label="Date" source="date" />
            <TextField label="Day" source="day" />
            <ReferenceField
              label="Delivery Area"
              source="deliveryarea.id"
              reference="DeliveryArea"
            >
              <TextField source={DELIVERYAREA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Delivery Price" source="deliveryPrice" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Booked" source="isBooked" />
            <TextField label="Order Quota" source="orderQuota" />
            <TextField label="Picking Price" source="pickingPrice" />
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
        <ReferenceManyField
          reference="PickupLocation"
          target="ServicePointId"
          label="Pickup Locations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PickupSlot"
          target="ServicePointId"
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
        <ReferenceManyField
          reference="Product"
          target="ServicePointId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="ServicePoint"
              source="servicepoint.id"
              reference="ServicePoint"
            >
              <TextField source={SERVICEPOINT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tenant Id" source="tenantId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
