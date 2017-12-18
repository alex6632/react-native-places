import React from "react";
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import Marker from './Marker';

const styles = StyleSheet.create({
  maps: {
    flex: 1
  }
});

const Around = props => {
  return (
    <MapView style={styles.maps}>
      <Marker places={props.places} />
    </MapView>
  );
};

export default Around;