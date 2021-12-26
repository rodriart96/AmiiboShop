import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const MiniCart = (props) => {
  const {navigation} = props

  return (
    <View
      style={{
        position: 'relative',
        left: 120,
        right: 0,
        top: -65,
        elevation: 3200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -30,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          resizeModel="contain"
          style={{
            marginTop: 5,
            width: 30,
            height: 30,
            tintColor: '#FF1700',
          }}
          source={require('../../assets/icons/shoppingCart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default MiniCart;
