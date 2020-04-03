import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'EZCareDriverApp'
    }
  }
);

export default createAppContainer(navigator);
