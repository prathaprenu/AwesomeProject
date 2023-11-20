import React, { useState } from "react";
import { View, Text, Modal, Pressable, TextInput, Image } from "react-native";
import Styles from "../UserAuthentication/Themes/Style";
import Loader from "../UserAuthentication/Loader";


const Signup = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);



    const onInputChange = (value, setState) => {
        setState(value);
    }

    const signupApi = async () => {

        if (!name) {
            alert('Please fill Name');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!phoneNumber) {
            alert('Please fill Phone Number');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }

        let values = {
            "name": (name),
            "email": (email),
            "phoneNumber": (phoneNumber),
            "password": (password),
        };
        try {
            setLoading(true);
            const response = await fetch('https://contacts-gpk8.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            const json = await response.json();
            if (json.success == true) {
                alert('signup success');
                setModalVisible(false);
                setLoading(false);
                setName('');
                setEmail('');
                setPhoneNumber('');
                setPassword('');
            }
            else if (json.status == 400) {
                setLoading(false);
                alert('This emailid already used');
                return;
            }
        } catch (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        }
    };

    return (
        <View>
            <Loader loading={loading} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={Styles.signupOverall}>
                    <View style={Styles.details}>
                        <View style={[Styles.box, Styles.signupBox]}>
                            <Text style={Styles.name}>SIGN UP</Text>
                            <TextInput style={Styles.input} placeholder="User Name" placeholderTextColor={'black'} value={name}
                                onChangeText={(value) => onInputChange(value, setName)}
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                blurOnSubmit={false}
                                returnKeyType='next'
                            >
                            </TextInput>
                            <TextInput style={Styles.input} placeholder="Email Address" placeholderTextColor={'black'} keyboardType='email-address' value={email}
                                onChangeText={(value) => onInputChange(value, setEmail)}
                                ref={(input) => { this.secondTextInput = input; }}
                                onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                                blurOnSubmit={false}
                                returnKeyType='next'
                            >
                            </TextInput>
                            <TextInput style={Styles.input} placeholder="Phone Number" placeholderTextColor={'black'} value={phoneNumber}
                                onChangeText={(value) => onInputChange(value, setPhoneNumber)}
                                ref={(input) => { this.thirdTextInput = input; }}
                                onSubmitEditing={() => { this.fourTextInput.focus(); }}
                                blurOnSubmit={false}
                                returnKeyType='next'
                            >
                            </TextInput>
                            <TextInput style={Styles.input} placeholder="Password" placeholderTextColor={'black'} value={password} secureTextEntry={true}
                                onChangeText={(value) => onInputChange(value, setPassword)}
                                ref={(input) => { this.fourTextInput = input; }}
                                returnKeyType='next'
                            >
                            </TextInput>

                            <Pressable
                                onPress={signupApi}>
                                <Text style={Styles.button}>SIGN UP</Text>
                            </Pressable>

                            <View style={Styles.page}>
                                <Text style={Styles.text}>Already have an account ?</Text>
                                <Text style={Styles.bottomButton} onPress={() => setModalVisible(false)}> sign in</Text>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.backImage}>
                        <Pressable
                            style={Styles.backBtn}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={Styles.backButton} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/multiplication.png')} />
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                onPress={() => setModalVisible(true)}>
                <Text style={Styles.bottomButton} >sign up</Text>
            </Pressable>
        </View>
    );
};

export default Signup;