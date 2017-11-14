import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./src/navigation";
StatusBar.setHidden(true);

const App = () => <RootNavigator />;
export default App;
