import React, {
  Component
} from 'react';
//import firebase from 'react-native-firebase';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import {
  Button,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

//console.log(firebase.database().app.name);

export default class App extends React.Component {
    state = {
      placeName: ''
    }

    errors = {
      nameError: ''
    }

    playerNameChangeHandler = val => {
      this.setState({
        placeName: val
      });
    }

    playerSubmitHandler = () => {
      if (val.match(/^[0-9]+$/)) {
        this.errors.nameError = 'Имя должно состоять только из букв';
      } else {
        this.errors.nameError = '';
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.logo}>
            <Image
              source={require('./img/logo.png')}
            />
          </View>
          <View style={styles.form}>
            <FormInput
              onChangeText={this.playerNameChangeHandler}
              placeholder="Имя игрока"
            />
            <FormValidationMessage>{this.errors.nameError}</FormValidationMessage>
          </View>
          <Button
            title='Далее'
            onPress={this.playerSubmitHandler}
          />
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: '80%'
  },
  logo: {
    alignItems: 'center',
  },
  form: {
  },
});
