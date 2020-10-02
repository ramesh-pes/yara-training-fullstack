import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import customerService from '../service/CustomerService';

export default class AddCustomer extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Add Customer'
    };
    state = {
        id: Date.now(),
        name: '',
        email: '',
        address: '',
        phone: ''
    }

    onAddButton = () => {
        customerService.addCustomer({
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            address:this.state.address
        });
        this.setState({
                id: Date.now(),
                name: '',
                email:'',
                address:'',
                phone:''
            });
        this.props.navigation.navigate('Customers', { name: this.state.email });
            
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'http://35.154.2.160/react-native/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'http://35.154.2.160/react-native/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'http://35.154.2.160/react-native/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="address"
                        underlineColorAndroid='transparent'
                        value={this.state.address}
                        onChangeText={(address) => this.setState({ address })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Phone"
                        underlineColorAndroid='transparent'
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onAddButton()}>
                    <Text style={styles.loginText}>Add Customer</Text>
                </TouchableHighlight>
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
