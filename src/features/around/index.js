import aroundContainer from "./containers";
export default aroundContainer;


/*import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  maps: {
    flex: 1
  }
});

const Around = () => (
  <View style={styles.view}>
    <MapView
      style={styles.maps}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {this.state.markers.map(marker => (
        <MapView.Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  </View>
);

export default Around;*/
