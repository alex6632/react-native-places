import React from "react";
import MapView from 'react-native-maps';

const Marker = props => {
    return props.places.map((item, index) => {
        return (
            <MapView.Marker
                coordinate={item.position}
                title={item.label}
            />
        );
    });
};

export default Marker;