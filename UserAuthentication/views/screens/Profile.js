import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import Styles from "../../Themes/Style";

const Profile = ({ route }) => {
    const { name, email, phoneNumber } = route.params

    return (
        <View>
            <View style={Styles.top}>
                <Text style={Styles.logo}>{name.toString()[0].toUpperCase()}</Text>
                <Text style={Styles.profileName}>{name.toString()[0].toUpperCase() + name.toString().slice(1)}</Text>
                <View style={Styles.call}>
                    <Pressable onPress={() => Linking.openURL(`tel:+91${phoneNumber}`)}><Text style={Styles.email}>Call</Text></Pressable>
                    <Pressable onPress={() => Linking.openURL(`sms:${phoneNumber}`)}><Text style={Styles.email}>SMS</Text></Pressable>
                </View>
            </View>
            <View style={Styles.info}>
                <Text style={Styles.phone}>Contact info</Text>
                <View>
                    <Text style={Styles.phone}>Phone  : {phoneNumber}</Text>
                    <Text style={Styles.phone}>Email  : {email}</Text>
                </View>
            </View>
        </View>
    );
};
export default Profile;