import * as React from 'react';
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import * as Font from 'expo-font';
import { useState } from 'react';
import { DrawerActions, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, Text, Appbar, Snackbar, BottomNavigation, Button, Card, Surface, Title, Paragraph, Drawer, IconButton } from 'react-native-paper';
import { styles } from './Styles.js'
import { CheckoutScreen } from './Checkout';
import { PaymentScreen } from './Payment';
import { HomeScreen } from './Home.js';
import { MapScreen } from './MapStatus';
import { ListingScreen } from './RestaurantListing';
import { StoreScreen } from './Store';
import { DemoScreen } from './Demo.js';
import { LoginScreen } from './Login.js';
//import { TrackingScreen } from './Tracking.js';
//import { TEST } from './TEST.js';
//import { MenuScreen } from './Menu.js';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import renderNode from 'react-native-elements/dist/helpers/renderNode.js';

import {getFromApiAsync} from "./Components/Database.js"

export default function KungFoodHippo() {
  const [active, setActive] = React.useState('');
  
getFromApiAsync('listShop').then(
    r => {console.info(r)}
  )
  

  return (

    <PaperProvider theme={theme}>
      
      <NavigationContainer>
        <Menu.Navigator initialRouteName="Login">
        <Menu.Screen name="Login" component={LoginScreen} />
        <Menu.Screen name="Home" component={HomeScreen} />
          <Menu.Screen name="Listing" component={ListingScreen} />
          <Menu.Screen name="Store" component={StoreScreen} />
          <Menu.Screen name="Checkout" component={CheckoutScreen} />
          <Menu.Screen name="Payment" component={PaymentScreen} />
          <Menu.Screen name="Map" component={MapScreen} />
          
          {/*<Menu.Screen name="Tracking" component={TrackingScreen} />*/}
        </Menu.Navigator>
      </NavigationContainer>

    </PaperProvider>

    
  );
}


const Menu = createDrawerNavigator();

const theme = {
  DefaultTheme,
  colors: {
    primary: styles.primColor,
    secondary: styles.secColor,
  },
};