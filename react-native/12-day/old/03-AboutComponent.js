import React from "react";
import { View, Text, TextInput,StyleSheet, TouchableOpacity,TouchableHighlight } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        height: '100%'
      }}
    >
      <View style={{ backgroundColor: "white", flex: 2 }} />
      <View style={{ flexDirection: "column", flex: 2 }} >
      <TextInput style={{ backgroundColor: "white", flex: 2 }}  placeholder="login"></TextInput>
      <TextInput style={{ backgroundColor: "white", flex: 2 }}  placeholder="password"></TextInput>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={() => alert('test')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
      </View>
      <View style={{ backgroundColor: "white", flex: 2 }} />
     </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

export default About;
