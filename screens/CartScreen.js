import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Card, Button, Icon, Image} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import Logo from '../components/ui/logo';
import MiniCart from '../components/ui/miniCart';
import { addQuantity, removeFromCart, subtractQuantity } from '../redux/shoppingCart';

const CartScreen = ({navigation}) => {
  const cartStorage = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();
   
  return (
    <ScrollView>
      <View>
        <Logo />
      <View style={styles.scroll}>
      
        {cartStorage.products.map(amiibo => {
          return (
            <View style={styles.container} key={amiibo.id }>
              <Card>
                <View style={{flexDirection: 'row'}}>
                  <Card.Image
                    style={{padding: 0, width: 100, height: 130}}
                    resizeMode="contain"
                    source={{
                      uri: amiibo.image,
                    }}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Card.Title
                      style={{
                        fontSize: 12,
                        marginBottom: 4,
                        width: 200,
                      }}>{`Amiibo: ${amiibo.name}`}</Card.Title>
                    <Card.Title
                      style={{
                        fontSize: 12,
                      }}>{`CLP: $${amiibo.price}`}</Card.Title>
                    <View
                      style={{
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                      }}>
                      <Button
                        disabled={amiibo.quantity === 0}
                        onPress={() => dispatch(subtractQuantity(amiibo.id, amiibo.quantity))} 
                        buttonStyle={styles.btnMin}
                        titleStyle={{fontSize: 23}}
                        title={'-'}
                      />
                      <Text style={styles.counter}>{amiibo.quantity}</Text>
                      <Button buttonStyle={styles.btnPlus} onPress={() => dispatch(addQuantity(amiibo.id, amiibo.quantity))} title={'+'} />
                      
                    </View>
                    <Button onPress={()=>dispatch(removeFromCart(amiibo.id))} buttonStyle={styles.btnDelete} style={{marginTop:20}} title='Borrar Amiibo'/>
                  </View>
                </View>
              </Card>
            </View>
          );
        })}
      </View>
      </View>
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 90, justifyContent: 'center', alignItems: 'center'}}>
  <Button onPress={()=> navigation.navigate('Checkout')}   buttonStyle={styles.btnPlus} title='Ir a Checkout'/>
</View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    height:'auto',
    display: 'flex',
    width: '100%',
    alighItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 150,
  },
  btnDelete:{
    marginTop:10,
    borderRadius: 30,
    backgroundColor: '#FF1700',
  },
  btnPlus: {
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#FF1700',
  },
  btnMin: {
    paddingHorizontal: 17,
    paddingVertical: 4,
    borderRadius: 50,
    backgroundColor: '#FF1700',
    fontSize: 20,
  },
  counter:{
    textAlignVertical: 'center',
    marginHorizontal: -23,
    fontSize: 15,
  }
});
export default CartScreen;
