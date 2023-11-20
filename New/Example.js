import React, { Component } from 'react';
import { Button, FlatList, SectionList, Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Customcomponent1 from './New/Components/Customcomponent1';
import Customcomponent2 from './New/Components/Customcomponent2';
import Customcomponent3 from './New/Components/Customcomponent3';


export default class Name extends Component {
    state = {
        count: 0,
    };

    onclick = () => {
        this.setState({ count: this.state.count + 1, });
    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.google} source={require('/home/test/Home/web/workspace/prathap/AwesomeProject/google.png')} />
                        <Button onPress={this.onclick} title='login' color='red'></Button>
                        <Text>count : {this.state.count}</Text>

                        <FlatList
                            data={[
                                { key: 'santhosh' },
                                { key: 'vicky' },
                                { key: 'yuvaraj' },
                                { key: 'santh' },

                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                            scrollEnabled={false}
                        />



                        <SectionList
                            sections={[
                                { title: 's', data: ['santhosh', 'santh', 'sarath', 'srinath', 'siva'] },
                                { title: 'y', data: ['yuvaraj'] },
                                { title: 'v', data: ['vicky'] },
                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                            renderSectionHeader={({ section }) => (
                                <Text style={styles.sectionHeader}>{section.title}</Text>
                            )}
                            keyExtractor={item => `basicListEntry-${item}`}
                            scrollEnabled={false}
                        />


                        <Customcomponent1 />
                        <Customcomponent2 />
                        <Customcomponent3 />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
};

const styles = StyleSheet.create({
    google: {
        width: 100,
        height: 100,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'blue',
        marginBottom: 10,
        color: 'white',
        width: 150,
        textAlign: 'center',
    },
    sectionHeader: {
        backgroundColor: 'red',
        fontSize: 30,
        fontWeight: '600',
    },
});

// export default Name;