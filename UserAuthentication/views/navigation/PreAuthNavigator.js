import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "../screens/PreAuthScreens/WelcomeScreen";

const PreAuthNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator initialRouteName="Welcome">
            <Screen
                name="Welcome"
                component={WelcomeScreen}
            />
        </Navigator>
    )
}
export default PreAuthNavigator;