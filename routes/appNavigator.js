import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Shaker from "../screens/shaker";
import Shakee from "../screens/shakee";

// const { Navigator, Screen } = createStackNavigator();

// const HomeNavigator = () => (
//   <Navigator headerMode="none">//other options: "float", "screen"
//     <Screen name="Home" component={Home} />
//     <Screen name="Shaker" component={Shaker} />
//     <Screen name="Shakee" component={Shakee} />
//   </Navigator>
// );

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );

const appNavigator = createStackNavigator();

export default function Navigator(){
    return (
        <NavigationContainer>
            <appNavigator.Navigator screenOptions={{headerShown: false}}>
                <appNavigator.Screen name="Home" component={Home} />
                <appNavigator.Screen name="Shaker" component={Shaker} />
                <appNavigator.Screen name="Shakee" component={Shakee} />                
            </appNavigator.Navigator>
        </NavigationContainer>
    );
}