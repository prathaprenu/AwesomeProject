import React,{useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from "../../context/authContext/AuthContext";

import HomeScreen from "../screens/PostAuthScreens/HomeScreen";

import { View, Image, Pressable,Alert } from "react-native";
import Styles from "../../Themes/Style";
import Profile from "../screens/Profile";



const PostAuthNavigator = () => {
  const { userSignout } = useContext(AuthContext)

  const onLogout = () => {
    Alert.alert('Are You Exit', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => userSignout() },
    ]);
  }

  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () =>
            <View>
              <Pressable onPress={onLogout}>
                <Image style={Styles.menuImage} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/menu.png')} />
              </Pressable>
            </View>
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
      />
    </Navigator>
  )
};

export default PostAuthNavigator;

