import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, FlatList, Pressable, Alert, RefreshControl } from 'react-native';
import { getCurrentUser } from '../../../Util/ApiUtil';
import Styles from '../../../Themes/Style';
import Loader from '../../../Loader';
import AuthContext from '../../../context/authContext/AuthContext';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userSignout } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(true);


  const onRefresh = () => {
    setData([]);
    onPress();
  };

  useEffect(() => {
    onPress();
  }, [])

  async function onPress() {
    try {
      setLoading(true);
      setData(await getCurrentUser());
      setLoading(false);
      setRefreshing(false);
    }
    catch (error) {
      Alert.alert('session experied', 'Are You Exit', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => userSignout() },
      ]);
      setLoading(false);
    }
  };

  const Item = ({ item }) => (
    <View>
      <Pressable style={Styles.homeContainer} onPress={({ }) => navigation.navigate('Profile', item)}>
        <View style={Styles.left}>
          <View style={Styles.homeDetails}>
            <Text style={Styles.homeLogo}>{item.name.toString()[0].toUpperCase()}</Text>
            <Text style={Styles.homeName}>{item.name.toString()[0].toUpperCase() + item.name.toString().slice(1)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View>
      <Loader loading={loading} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} />
        }
      >
        <View style={Styles.homeMain}>
          <View style={Styles.contacts}>
            <Text style={Styles.homePhone}>Phone contacts</Text>
            <Text style={Styles.homePhone}>Email contacts</Text>
          </View>
          <View style={Styles.accounts}>
            <Text style={Styles.total}>All accounts {data.length} contacts</Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  )
};

export default HomeScreen;