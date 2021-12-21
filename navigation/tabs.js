import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
            position: 'absolute',
            bottom: 5,
            left: 5,
            right: 5,
            elevation: 0,
            backgroundColor: '#F0ECE3',
            borderRadius: 15,
            height: 70,
            ...style.shadow,
          },
          null,
        ],
        style: {},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/icons/casa.png')}
                resizeModel="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF1700' : '#C7B198',
                }}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/icons/shoppingCart.png')}
                resizeModel="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF1700' : '#C7B198',
                }}
              />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/icons/coin.png')}
                resizeModel="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF1700' : '#C7B198',
                }}
              />
              <Text>Checkout</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffSet: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
