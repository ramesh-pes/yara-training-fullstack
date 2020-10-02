import React, { Component } from 'react';
import { View,Text,TextInput, ScrollView,StyleSheet,TouchableHighlight } from 'react-native';
import {updateCustomer,addCustomer,getCustomerById}  from '../service/CustomerAPI';

import customerService from '../service/CustomerLocal';
//import { EventRegister } from 'react-native-event-listeners'
export default class AddCustomer extends Component {
      static navigationOptions = {
        headerTitle: 'Add Customer',
        title: 'Add Customer'
    };
    constructor(props) {
      super(props);
      this.state = {
          id:"",
          name:"",
          email:"",
          phone:"",
          address:"",
          buttonLabel:'Add Customer'
      };
    }
    componentDidMount(){
      if(this.props.route.params.id != undefined){
        this.setState({buttonLabel:'Update Customer'})
        this.props.navigation.setOptions({ title: 'Update Customer' });
        let id = this.props.route.params.id;
        getCustomerById(id).then((customer)=>{
          this.setState({
            id:customer.id,
            name:customer.name,
            email:customer.email,
            phone:customer.phone,
            address:customer.address
          });
        })
        console.log("id" + this.props.route.params.id);
      }
    }
    addUpdateCustomer(){
      let newCustomer ={ 
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        address:this.state.address,
      }
      if(this.state.id != ""){
        newCustomer.id = this.state.id;
        updateCustomer(newCustomer).then(()=>{
          this.props.navigation.navigate('Customers');
        })
      }else{
        newCustomer.id = Date.now();
        addCustomer(newCustomer).then(()=>{
          this.props.navigation.navigate('Customers');
        })
      }
    }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 10,paddingLeft:50}} >
              <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Enter Name"
                underlineColorAndroid='transparent'
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })} />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Enter Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })} />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Enter phone"
                keyboardType="phone-pad"
                underlineColorAndroid='transparent'
                value={this.state.phone}
                onChangeText={(phone) => this.setState({ phone })} />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Enter Address"
                underlineColorAndroid='transparent'
                value={this.state.address}
                onChangeText={(address) => this.setState({ address })} />
        </View>
         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
         onPress={() => this.addUpdateCustomer()}>
            <Text style={styles.loginText}>{this.state.buttonLabel}</Text>
         </TouchableHighlight>
        </View>
      </View>
    );
  }
}

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
