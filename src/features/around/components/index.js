import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "./Map";

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  maps: {
    flex: 1
  }
});

const Markers = props => (
  <View style={styles.view}>
    <Map places={props.places} />
  </View>
);
export default Markers;