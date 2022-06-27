import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { HOME } from "../constants/routeNames";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HOME} component={HomeScreen} options={{headerShown:false}} />

        </Stack.Navigator>

    )
}

export default AppStack;