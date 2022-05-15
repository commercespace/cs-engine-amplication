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
} from "react-admin";

import { DELIVERYAREAGROUP_TITLE_FIELD } from "./DeliveryAreaGroupTitle";
import { SERVICEPOINT_TITLE_FIELD } from "../servicePoint/ServicePointTitle";

export const DeliveryAreaGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DeliveryArea"
          target="DeliveryAreaGroupId"
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
      </SimpleShowLayout>
    </Show>
  );
};
