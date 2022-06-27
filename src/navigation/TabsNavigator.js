import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FeedScreen from "../screens/FeedScreen";
import FeedtwoScreen from "../screens/FeedtwoScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import { HOME } from "../constants/routeNames";
import Icon from "react-native-ionicons";
import { color } from "react-native-reanimated";




const Tab = createBottomTabNavigator();


const TabNavigator = () => {

    return (

        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown:false, tabBarActiveBackgroundColor:'#4E5254'}} >
            <Tab.Screen name={HOME} component={HomeScreen} 
            />
            <Tab.Screen name='feed' component={FeedScreen}/>
            <Tab.Screen name='feedtwo' component={FeedtwoScreen}/>
            <Tab.Screen name='notifications' component={NotificationsScreen}/>
            <Tab.Screen name='messages' component={MessagesScreen}/>



        </Tab.Navigator>
    )

}

export default TabNavigator;