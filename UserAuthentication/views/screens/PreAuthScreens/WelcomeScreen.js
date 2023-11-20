import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/authContext/AuthContext'
import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView } from "react-native";
import Signup from '../../../../New/Signup';
import { login } from '../../../Util/ApiUtil';
import Styles from '../../../Themes/Style';
import { useHeaderHeight } from '@react-navigation/elements';
import Loader from '../../../Loader';

const WelcomeScreen = () => {

    const { onAuthentication } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const headerHeight = useHeaderHeight();
    const [loading, setLoading] = useState(false);

    const onInputChange = (value, setState) => {
        setState(value);
    }

    const loginApi = async () => {

        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }

        let values = {
            "email": (email),
            "password": (password),
        };

        try {
            setLoading(true);
            const data = await login(values);
            setEmail('');
            setPassword('');
            onAuthentication(`${data.tokenType} ${data.accessToken}`);
        }
        catch (error) {
            setLoading(false)
            if (error.status == 401) {
                alert('Please check your email or password');
                return;
            }
            if (error.status == 400) {
                alert('Go to signup');
                return;
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={headerHeight}
            style={Styles.overall}>
            <Loader loading={loading} />
            <View>
                <Image style={Styles.image} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/android/app/src/main/ic_launcher-playstore.png')} />
            </View>
            <View style={Styles.box}>
                <Text style={Styles.name}>SIGN IN</Text>
                <TextInput style={Styles.input} placeholder="Enter your email" placeholderTextColor={'black'} keyboardType='email-address' value={email}
                    onChangeText={(value) => onInputChange(value, setEmail)}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    returnKeyType='next'
                >
                </TextInput>
                <TextInput style={Styles.input} placeholder="Enter your Password" placeholderTextColor={'black'} value={password} secureTextEntry={true}
                    onChangeText={(value) => onInputChange(value, setPassword)}
                    ref={(input) => { this.secondTextInput = input; }}
                    returnKeyType='next'
                >
                </TextInput>

                <Pressable
                    onPress={loginApi}>
                    <Text style={Styles.button}>SIGN IN</Text>
                </Pressable>

                <View style={Styles.btn}>
                    <Text style={Styles.text}>create new account ?</Text>
                    <Signup />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default WelcomeScreen;