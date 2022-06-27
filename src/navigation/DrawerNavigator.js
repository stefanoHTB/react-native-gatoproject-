import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { APPSTACK_NAVIGATOR } from "../constants/routeNames";
import AppStack from "./AppStack";
import TabNavigator from "./TabsNavigator";
import { TAB_NAVIGATOR } from "../constants/routeNames";





const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (

        <Drawer.Navigator screenOptions={{title:'BMW', headerShown: false}} >
            <Drawer.Screen name={TAB_NAVIGATOR} component={TabNavigator}  />
        </Drawer.Navigator>

    )
};


export default DrawerNavigator;