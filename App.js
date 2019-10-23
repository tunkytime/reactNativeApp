import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Schaaf</Text>
        <Text style={styles.subtitle}>Development</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1D"
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase"
  },
  subtitle: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "lowercase"
  }
});
