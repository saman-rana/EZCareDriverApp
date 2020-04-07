import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import {EzCareProvider} from './src/context/AppContext';
import OrderScreen from './src/screens/OrderScreen';
import BookingScreen from './src/screens/BookingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DriverLogin from './src/screens/DriverLogin';


import {Image, View, Text, ImageBackground, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FirstStack = createStackNavigator(
  {
    Ordder: {
      screen: OrderScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
);

const SecondStack = createStackNavigator(
  {
    AddBooking: {
      screen: BookingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
);

const ThirdStack = createStackNavigator(
  {
    Prof: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
);



const TabNavigator = createBottomTabNavigator(
  {
    Order: {
      screen: FirstStack,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
          navigation.replace('Ordder');
        
        },
      }),
    },
    Booking: {
      screen: SecondStack,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
          navigation.replace('AddBooking');
         
        },
      }),
    },
    Appointment: {
      screen: ThirdStack,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
          navigation.replace('Prof');
        },
      }),
    },
   
    Logout: {
      screen: DriverLogin,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: (scene, jumpToIndex) => {
          navigation.replace('Login');
        },
      }),
    },
  },
  {
    headerShown: false,
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Order') {
          iconName = focused ? 'md-home' : 'md-home';
        } else if (routeName === 'Booking') {
          iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes';
        } else if (routeName === 'Appointment') {
          iconName = focused ? 'ios-apps' : 'ios-apps';
        } else if (routeName === 'Logout') {
          iconName = focused ? 'ios-power' : 'ios-power';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#0e2b57',
      },
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: DriverLogin,
      navigationOptions: {
        headerShown: false,
      },
    },
    dashboard: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerShown: false,
    initialRouteName:"dashboard"
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
      },
    },
  };


  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,

      primary: '#0e2b57',
      accent: '#d8d7d7',
      text: '#0e2b57',
      whiteText: '#e7e7e7',
      darkCard: '#0e2b57',
      surface: '#e7e7e7',
      backgroundsForApp: '#e7e7e7',
    },
  };

  return (
       <EzCareProvider>
    <PaperProvider theme={theme}>
        <AppContainer />
    </PaperProvider>
          </EzCareProvider>
  );
};

export default App;
