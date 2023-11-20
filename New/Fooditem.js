import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import Order from "./Order";



const Data = [
    {
        name: 'Ambur-Biryani',
        piece: '1000 pcs',
        orginalprice: '180',
        currentprice: '170',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/Ambur-Chicken-Biryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'Hyd-Biryani',
        piece: '1000 pcs',
        orginalprice: '170',
        currentprice: '160',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/Chicken-Biryani-hyd.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',

    },
    {
        name: 'Egg-Biryani',
        piece: '1000 pcs',
        orginalprice: '150',
        currentprice: '140',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/egg-biryani.jpeg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'goan-fish-Biryani',
        piece: '1000 pcs',
        orginalprice: '180',
        currentprice: '170',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/goan-fish-biryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'Hyd-Mutton-Biryani',
        piece: '1000 pcs',
        orginalprice: '160',
        currentprice: '150',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/hyd-Mutton-Biryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'kamrupi-Biryani',
        piece: '1000 pcs',
        orginalprice: '170',
        currentprice: '160',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/kamrupi-biryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'kashmiri-pulao',
        piece: '1000 pcs',
        orginalprice: '150',
        currentprice: '140',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/kashmiri.pulao.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'memoni-Biryani',
        piece: '1000 pcs',
        orginalprice: '150',
        currentprice: '140',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/memonibiryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
    {
        name: 'mughlai-Biryani',
        piece: '1000 pcs',
        orginalprice: '180',
        currentprice: '170',
        offer: '10% OFF',
        image: require('/home/test/Home/web/workspace/prathap/AwesomeProject/images/biryani/mughlai-biryani.jpg'),
        description: 'Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish). In some cases without any meat, and sometimes with eggs and potatoes',
    },
];

// export default class Food extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 <FlatList
//                     data={Data}
//                     renderItem={({ item }) => <Item item={item} />}
//                     scrollEnabled={false}
//                 />
//             </ScrollView>
//         );
//     }
// }

const Food =()=> {
    // render() {
        return (
            <ScrollView>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Item item={item} />}
                    scrollEnabled={false}
                />
            </ScrollView>
        );
    // }
}


const Item = ({ item }) => (

    <View style={styles.card}>
        <View style={styles.left}>
            <Text style={styles.box}></Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.pcs}>{item.piece}</Text>
            <Text style={styles.orginalprice}>{item.orginalprice}</Text>
            <Text style={styles.currentprice}>${item.currentprice}</Text>
            <Text style={styles.offer}>{item.offer}</Text>
            <Image style={styles.image} source={item.image} />
            <Order item={item} />
        </View>
    </View>
);


const styles = StyleSheet.create({
    card: {
        height: 150,
        backgroundColor: '#f2f2f7',
        borderRadius: 7,
        margin: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
    },
    left: {
        padding: 20,
        position: 'relative',
    },
    box: {
        width: 15,
        height: 15,
        backgroundColor: '#1ED40D',
        borderRadius: 2,
    },
    name: {
        left: 20,
        top: -16,
        fontSize: 17,
        color: 'black',
        fontWeight: '600',
    },
    pcs: {
        top: -10,
        color: 'black',
        fontWeight: '400',
    },
    orginalprice: {
        textDecorationLine: 'line-through',
        fontSize: 18,
    },
    currentprice: {
        color: 'black',
        top: -24,
        left: 40,
        fontWeight: '600',
        fontSize: 18,
    },
    offer: {
        color: '#1ED40D',
        left: 90,
        top: -45,
    },
    image: {
        width: 130,
        height: 90,
        borderRadius: 20,
        left: 240,
        top: 10,
        position: 'absolute',
    },
});
export default Food;
