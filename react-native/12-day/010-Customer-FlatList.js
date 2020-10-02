import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import AppMenu  from '../components/AppMenu';

const DATA = [
  {"id":1,"name":"Vivek Singhwal","email":"vivek@pyther.com","phone":"565656565","address":"India"},
  {"id":2,"name":"Rama","email":"rama@pyther.com","phone":"565656565","address":"India"},
  {"id":3,"name":"Kavita","email":"kavita@pyther.com","phone":"565656565","address":"India"},
  {"id":4,"name":"Krishna","email":"vivek@pyther.com","phone":"565656565","address":"India"},
  {"id":5,"name":"Rahim","email":"vivek@pyther.com","phone":"565656565","address":"India"}];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View
      style={{
        flexDirection: "column",
        height: 100
      }}
    >
      <View style={ {flex: 2 }} >
      <View style={ {flex: 2, flexDirection: "row",}} >
        <View style={ {flex: 6}} >
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={ {flex: 1}} >
          <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/edit.png?9',
          }}
        />
       </View>
        <View style={ {flex: 1}} >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'http://training.pyther.com/icons/delete.png',
          }}
        />
        </View>
      </View>
      </View>
      <View style={ {flex: 2,padding:2, flexDirection: "row",}} >
        <View style={ {flex: 2}} >
          <Text>{item.email}</Text>
        </View>
        <View style={ {flex: 2}} >
          <Text>{item.phone}</Text>
        </View>
      </View>
      <View style={{flex: 1}} >
        <Text>{item.address}</Text>
      </View>
      </View>
  </TouchableOpacity>
);

const Customers = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View>
      <AppMenu  navigation={props.navigation}/>
      <Button title="Add Customer"></Button>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 32,
  },
});

export default Customers;

