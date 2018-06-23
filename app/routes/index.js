import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Loading from '../screens/loading';
import Home from '../screens/home';
import First from '../screens/first';
import Second from '../screens/second';
import Fail from '../screens/fail';

const MainStack = createStackNavigator(
  {
    Home,
    First,
    Second,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    headerVisible: false,
  },
);

const FailStack = createStackNavigator(
  {
    Fail,
  }
);

const Root = createSwitchNavigator(
  {
    Loading,
    MainStack,
    FailStack,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
    headerVisible: false,
  },
);

export default Root;
