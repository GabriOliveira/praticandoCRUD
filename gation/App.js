import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <>
            <Icon 
            name="home"
            size={26}
            color={focused?"red" : "black"}
            />
            </>
          )
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <>
            <Icon
            name="cog"
            size={26}
            color={focused?"red" : "black"}
            />
           
            </>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
