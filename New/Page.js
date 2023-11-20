import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Modal, View, Pressable } from 'react-native';
import Food from './New/Fooditem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Page = () => {
    // const [modalVisible, setModalVisible] = useState(false);
    // // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState();

    // const getMovies = async () => {
    //     try {
    //         const response = await fetch('https://reactnative.dev/movies.json');
    //         const json = await response.json();
    //         setData(json.movies);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     // finally {
    //     //     setLoading(false);
    //     // }
    // };

    // useEffect(() => {
    //     getMovies();
    // });


    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    onPress = async () => {
        setIsLoading(true);
        setModalVisible(true);

        let values = {
            email: 'prathap123@gmail.com',
            password: 'prathap123',
        };
        return fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                // setData(json);
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });


            
        // const response = await fetch('http://localhost:8080/auth/login', {
        //     method: 'POST',
        //     body: JSON.stringify(values)
        //     // headers: {
        //     //     'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
        //     //     'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
        //     // },
        // });
        // setData(await response.json());
        // setIsLoading(false);
    };


    Press = async () => {
        setIsLoading(true);
        setModalVisible(true);

        return fetch('http://localhost:8080/user/me', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjk4Mjk1MDMzLCJleHAiOjE2OTgyOTUzOTN9.TLAgVskSCducghgv1OfkA0tdVvRrtx_zw2GDirhRIax_8s-J53COqEpCno2mUppF2w0Krp5ufvVNe65YglCR-g',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(async function (json) {
                // console.log(json);
                setData(json);
                const value=data;
                await AsyncStorage.setItem("user", JSON.stringify(value));
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        };

        const getUser = async () => {
            try {
              const savedUser = await AsyncStorage.getItem("user");
              const currentUser = JSON.parse(savedUser);
              console.log(currentUser);
            } catch (error) {
              console.log(error);
            }
          };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View>
                    {/* <FlatList
                        data={data}
                        // keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text>id : {item.id}</Text>
                                <Text>title : {item.title}</Text>
                                <Text>releaseYear : {item.releaseYear}</Text>
                            </View>
                        )}
                    /> */}
                    {/* <Food /> */}
                </View>
            </Modal>
            <Pressable
                onPress={this.Press}>
                <Text style={styles.button}>SIGN IN</Text>
            </Pressable>
            <Text onPress={getUser}>details</Text>
        </View>

    );
};
const styles = StyleSheet.create({
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
export default Page;

