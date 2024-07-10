import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DiscordMemberList } from "./discordMember/DiscordMemberList";
import { DiscordMemberCreate } from "./discordMember/DiscordMemberCreate";
import { DiscordMemberEdit } from "./discordMember/DiscordMemberEdit";
import { DiscordMemberShow } from "./discordMember/DiscordMemberShow";
import { StatusLogList } from "./statusLog/StatusLogList";
import { StatusLogCreate } from "./statusLog/StatusLogCreate";
import { StatusLogEdit } from "./statusLog/StatusLogEdit";
import { StatusLogShow } from "./statusLog/StatusLogShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
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
        title={"Discord_Members_Status"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DiscordMember"
          list={DiscordMemberList}
          edit={DiscordMemberEdit}
          create={DiscordMemberCreate}
          show={DiscordMemberShow}
        />
        <Resource
          name="StatusLog"
          list={StatusLogList}
          edit={StatusLogEdit}
          create={StatusLogCreate}
          show={StatusLogShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
