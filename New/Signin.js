import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, Modal, Pressable } from "react-native";
import Signup from "./Signup";
import EncryptedStorage from 'react-native-encrypted-storage';

const Signin = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    onPress = async () => {
        setIsLoading(true);
        setModalVisible(true);

        let values = {
            email: (email),
            password: (password),
        };
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            const json = await response.json();
            const tokenType = json.tokenType;
            const accessToken = json.accessToken;
            await EncryptedStorage.setItem("accesstoken", `${tokenType} ${accessToken}`);

        } catch (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        }
    };


    Press = async () => {
        setIsLoading(true);
        setModalVisible(true);

        try {
            const response = await fetch('http://localhost:8080/user/me', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': await EncryptedStorage.getItem("accesstoken"),
                },
            });
            const json = await response.json();
            setData(json);

        } catch (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        }
    };
    console.log(data);

    return (
        <View>
            <View style={styles.overall}>
                <Image style={styles.image} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/image.webp')} />
                <View style={styles.box}>
                    <Text style={styles.name}>SIGN IN</Text>
                    <TextInput style={styles.input} placeholder="User Name" onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput style={styles.input} placeholder="Password" onChangeText={password => setPassword(password)}></TextInput>
                    {/* <Page /> */}
                    <Pressable
                        onPress={this.onPress}>
                        <Text style={styles.button}>SIGN IN</Text>
                    </Pressable>

                    <Pressable
                        onPress={this.Press}>
                        <Text style={styles.button}>Details</Text>
                    </Pressable>


                    <Pressable
                         onPress={() => navigation.navigate('Food')}>
                        <Text style={styles.button}>Fooditem</Text>
                    </Pressable>

                    <View style={styles.btn}>
                        <Text>create new account ?</Text>
                        <Signup />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overall: {
        backgroundColor: '#998ED5',
        height: 800,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 320,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
        alignSelf: 'baseline',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    name: {
        fontSize: 25,
        color: '#998ED5',
        fontWeight: '600',
    },
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        opacity: 0.6,
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 40,
    },
    btn: {
        flexDirection: 'row',
        gap: 5,
    },
    button: {
        textAlign: 'center',
        fontWeight: '600',
        color: 'white',
        height: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#998ED5',
        width: 250,
    },
});
export default Signin;