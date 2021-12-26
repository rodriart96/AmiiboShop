import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Amiibos from '../components/Amiibos/amiibos';
import Logo from '../components/ui/logo';
import MiniCart from '../components/ui/miniCart';
const HomeScreen = ({navigation}) => {
  
  return (
    <ScrollView>
        <Logo/>
        <MiniCart navigation={navigation}/>
        <Amiibos navigation={navigation}/>
    </ScrollView>
  );
};
export default HomeScreen;
