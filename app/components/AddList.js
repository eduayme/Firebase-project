/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
import firebase from 'firebase';
import {DrawerNavigator} from 'react-navigation';
export default class AddList extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      nomllista: '',
    }
  }

  Insert = () => {
    firebase.database().ref("Llista/"+this.state.nomllista).set(
      {
          name: this.state.nomllista,
      }
      ).then(() => {
          console.log('INSERTED !');
      }).catch((error) => {
          console.log(error);
      });
      
      this.setState({
        nomllista: ''
      });
  }

  render() {
  
    return (
      <View style={styles.container}>
        <TextInput style = {styles.textinput} 
        placeholder='Nom de la llista'
        underlineColorAndroid={'transparent'}
        onChangeText={(text) => this.setState({nomllista:text})}
        value={this.state.nomllista}
        />
        <Button
          onPress={this.Insert}
          title="Afegir"
          color="#841584"
        />
       
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    fontSize: 24,
    color: '#003399',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#003399',
    borderBottomWidth: 1,
    paddingRight:120,
    paddingTop: 60,
  },
});
