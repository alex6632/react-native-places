// import React from "react";
// import { View, Text } from "react-native";

// const Friends = () => (
//   <View>
//     <Text>Friends page</Text>
//   </View>
// );

// export default Friends;

// *****************

import React from 'react';
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../assets/animation.json')}
      />
    );
  }
}