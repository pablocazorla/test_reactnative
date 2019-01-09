import React, { Component } from "react";
import {Font,AppLoading} from "expo";
import { StyleProvider } from "native-base";
import AppNavigator from "./router";
import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }else{
      return <StyleProvider style={getTheme(variables)}>
        <AppNavigator />
      </StyleProvider>;
    }    
  }
};