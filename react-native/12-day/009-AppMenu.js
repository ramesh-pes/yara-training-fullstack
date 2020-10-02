import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class AppMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flexDirection: 'row'}}>
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Home"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Movies')}
        title="Movies"
      />
      <Button
         onPress={() => this.props.navigation.navigate('Details')}
        title="Details"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Login')}
        title="Logout"
      />
      </View>
    );
  }
}
