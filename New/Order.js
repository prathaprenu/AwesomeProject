import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';

const Order = ({ item }) => {
    const [count, setCount] = useState(0);  
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.overall}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Image style={styles.backbutton} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/back.png')} />
                    </Pressable>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.pricecount}>
                        <View>
                            <Text style={styles.price}>Price : ${count * item.currentprice}</Text>
                        </View>
                        <View style={styles.itemcount}>
                            <Text onPress={() => setCount(() => Math.max(count - 1, 0))} style={styles.increment}>-</Text>
                            <Text style={styles.count}>{count}</Text>
                            <Text onPress={() => setCount(count + 1)} style={styles.increment}>+</Text>
                        </View>
                    </View>
                    <Text>{item.description}</Text>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.btn]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>View</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    overall: {
        padding: 20,
    },
    backbutton: {
        width: 20,
        height: 20,
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderRadius: 15,
        marginTop: 40,
    },
    name: {
        marginTop: 20,
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '600',
    },
    pricecount: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    price: {
        color: 'black',
        fontSize: 16,
        marginBottom: 10,
    },
    itemcount: {
        flexDirection: 'row',
        gap: 10,
    },
    increment: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
    },
    count: {
        textAlign: 'center',
        color: 'black',
    },
    /* view button */
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: 'orangered',
    },
    btn: {
        top: -35,
        left: 225,
        width: 120,
        height: 35,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Order;
