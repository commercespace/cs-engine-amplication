import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DELIVERYAREAGROUP_TITLE_FIELD } from "../deliveryAreaGroup/DeliveryAreaGroupTitle";
import { SERVICEPOINT_TITLE_FIELD } from "../servicePoint/ServicePointTitle";

export const DeliveryAreaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryAreas"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
