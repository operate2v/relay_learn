import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Loading from '../screens/loading';
import Home from '../screens/home';
import First from '../screens/first';
import Second from '../screens/second';
import Fail from '../screens/fail';
import StoreDetail from '../screens/store_detail';

const MainStack = createStackNavigator(
  {
    Home,
    First,
    Second,
    StoreDetail
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
