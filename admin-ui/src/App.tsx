import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { ServicePointList } from "./servicePoint/ServicePointList";
import { ServicePointCreate } from "./servicePoint/ServicePointCreate";
import { ServicePointEdit } from "./servicePoint/ServicePointEdit";
import { ServicePointShow } from "./servicePoint/ServicePointShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { DeliveryAreaList } from "./deliveryArea/DeliveryAreaList";
import { DeliveryAreaCreate } from "./deliveryArea/DeliveryAreaCreate";
import { DeliveryAreaEdit } from "./deliveryArea/DeliveryAreaEdit";
import { DeliveryAreaShow } from "./deliveryArea/DeliveryAreaShow";
import { DeliverySlotList } from "./deliverySlot/DeliverySlotList";
import { DeliverySlotCreate } from "./deliverySlot/DeliverySlotCreate";
import { DeliverySlotEdit } from "./deliverySlot/DeliverySlotEdit";
import { DeliverySlotShow } from "./deliverySlot/DeliverySlotShow";
import { PickupLocationList } from "./pickupLocation/PickupLocationList";
import { PickupLocationCreate } from "./pickupLocation/PickupLocationCreate";
import { PickupLocationEdit } from "./pickupLocation/PickupLocationEdit";
import { PickupLocationShow } from "./pickupLocation/PickupLocationShow";
import { PickupSlotList } from "./pickupSlot/PickupSlotList";
import { PickupSlotCreate } from "./pickupSlot/PickupSlotCreate";
import { PickupSlotEdit } from "./pickupSlot/PickupSlotEdit";
import { PickupSlotShow } from "./pickupSlot/PickupSlotShow";
import { DeliveryAreaGroupList } from "./deliveryAreaGroup/DeliveryAreaGroupList";
import { DeliveryAreaGroupCreate } from "./deliveryAreaGroup/DeliveryAreaGroupCreate";
import { DeliveryAreaGroupEdit } from "./deliveryAreaGroup/DeliveryAreaGroupEdit";
import { DeliveryAreaGroupShow } from "./deliveryAreaGroup/DeliveryAreaGroupShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CS Engine"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="ServicePoint"
          list={ServicePointList}
          edit={ServicePointEdit}
          create={ServicePointCreate}
          show={ServicePointShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="DeliveryArea"
          list={DeliveryAreaList}
          edit={DeliveryAreaEdit}
          create={DeliveryAreaCreate}
          show={DeliveryAreaShow}
        />
        <Resource
          name="DeliverySlot"
          list={DeliverySlotList}
          edit={DeliverySlotEdit}
          create={DeliverySlotCreate}
          show={DeliverySlotShow}
        />
        <Resource
          name="PickupLocation"
          list={PickupLocationList}
          edit={PickupLocationEdit}
          create={PickupLocationCreate}
          show={PickupLocationShow}
        />
        <Resource
          name="PickupSlot"
          list={PickupSlotList}
          edit={PickupSlotEdit}
          create={PickupSlotCreate}
          show={PickupSlotShow}
        />
        <Resource
          name="DeliveryAreaGroup"
          list={DeliveryAreaGroupList}
          edit={DeliveryAreaGroupEdit}
          create={DeliveryAreaGroupCreate}
          show={DeliveryAreaGroupShow}
        />
      </Admin>
    </div>
  );
};

export default App;
