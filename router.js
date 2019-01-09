import {createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Profile from './screens/Profile';
import ChangePassword from './screens/ChangePassword';

const AppNavigator = createDrawerNavigator(
  {
    Home: {screen: Profile},
    ChangePassword: {screen: ChangePassword}
  }
);

export default createAppContainer(AppNavigator);
