import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DELIVERYAREA_TITLE_FIELD } from "../deliveryArea/DeliveryAreaTitle";
import { SERVICEPOINT_TITLE_FIELD } from "../servicePoint/ServicePointTitle";

export const DeliverySlotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Delivery Slots"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
