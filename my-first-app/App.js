import React, { Component } from "react";
import firebase from "react-native-firebase";
import { Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import {
  Button,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import ListItem from "./src/components/ListItem/ListItem";

//console.log(firebase.database().app.name);

export default class App extends React.Component {
  state = {
    placeName: "",
    names: ["test1", "test2"]
  };

  errors = {
    nameError: ""
  };

  playerNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  playerSubmitHandler = () => {
    if (this.state.placeName.match(/^[0-9]+$/)) {
      this.errors.nameError = "Имя должно состоять только из букв";
    } else {
      this.errors.nameError = "";
      this.setState(prevState => {
        return {
          names: prevState.names.concat(prevState.placeName)
        };
      });
    }
  };

  render() {
    const placesOutput = this.state.names.map((place, i) => (
      <ListItem
        style={styles.listItem}
        key={i}
        placeName={place}
        onItemPressed={() => alert("Item pressed -ID: " + i)}
      />
    ));
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.logo}>
            <Image source={require("./img/logo.png")} />
          </View>
          <View style={styles.form}>
            <FormInput
              onChangeText={this.playerNameChangeHandler}
              placeholder="Имя игрока"
            />
            <FormValidationMessage>
              {this.errors.nameError}
            </FormValidationMessage>
          </View>
          <Button title="Далее" onPress={this.playerSubmitHandler} />
        </Card>
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  card: {
    width: "80%"
  },
  logo: {
    alignItems: "center"
  },
  form: {},
  listContainer: {},
  listItem: {
    width: "50%"
  }
});
