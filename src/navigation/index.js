import React from "react";
import { View, Text } from "react-native";
import {DrawerNavigator} from 'react-navigation';
import {StackNavigator} from "react-navigation";
import {TabNavigator} from 'react-navigation';

import Home from "../features/home";
import Around from "../features/around";
import Friends from "../features/friends";
import Places from "../features/places/components/index";

const RootTabs = TabNavigator({
  Places: {
    screen: Places,
    navigationOptions: {
      header: null
    }
  },
  Around: {
    screen: Around,
    navigationOptions: {
      header: null
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: {
      header: null
    }
  },
});

const RootDrawer = DrawerNavigator(
  {
    Drawer: {
      screen: RootTabs,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    drawerPosition: "right",
    contentComponent: props => (
      <View>
        <Text {...props}>Hello Drawer</Text>
      </View>
    )
  }
);

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Places: {
    screen: RootDrawer,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
