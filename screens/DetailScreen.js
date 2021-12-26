import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Card, Button, Icon} from 'react-native-elements';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/counter/index';
import {addToCart, addQuantity} from '../redux/shoppingCart/index';
import {instancia, amiiboLogo} from '../devVariables';
import MiniCart from '../components/ui/miniCart';

function DetailsScreen({route, navigation}) {
  const [amiiboDetail, setAmiiboDetail] = useState([]);
  const [amiiboValidation, setAmiiboValidation ] = useState()
  const {amiiboHead, amiiboTail, amiiboPrice, amiiboImg, amiiboName} = route.params;
  const counter = useSelector(state => state.counter);
  const cartStorage = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();
  const product = {
    id: amiiboHead + amiiboTail,
    quantity: counter,
    image: amiiboImg,
    name: amiiboName,
    price: amiiboPrice,
  };

 function validateAmiibo(){
  cartStorage.products.map( product =>{
     setAmiiboValidation(product.id)
  })
}

  useEffect(() => {
    async function fetchAmiibos() {
      const requestAmiibo = await axios.get(`${instancia}?tail=${amiiboTail}`);
      setAmiiboDetail(requestAmiibo.data.amiibo);
    }
    fetchAmiibos();
    validateAmiibo();
  }, []);
  return (
    <ScrollView><MiniCart/>
      <View style={styles.scroll}>
        
        {amiiboDetail.map(amiibo => {
          return (
            <View style={styles.container} key={amiiboTail}>
              <Card>
                <Card.Image
                  style={{padding: 0, height: 50}}
                  resizeMode="contain"
                  source={{
                    uri: amiiboLogo,
                  }}
                />
                <Card.Image
                  style={{padding: 0, height: 410}}
                  resizeMode="contain"
                  source={{
                    uri: amiibo.image,
                  }}
                />
                <Card.Title>{`Juego: ${amiibo.gameSeries}`}</Card.Title>
                <Card.Title>{`Personaje: ${amiibo.character}`}</Card.Title>

                <Card.Divider />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Button
                      buttonStyle={styles.btnMin}
                      titleStyle={{fontSize: 20}}
                      disabled={counter === 0}
                      onPress={() => dispatch(decrement())}
                      title={'-'}
                    />
                    <Text
                      style={styles.counter}>
                      {counter}
                    </Text>
                    <Button
                      buttonStyle={styles.btnPlus}
                      onPress={() => dispatch(increment())}
                      titleStyle={{fontSize: 13}}
                      title={'+'}
                    />
                  </View>
                  <Card.Title
                    style={{marginTop: 5}}>{`CLP: $${amiiboPrice}`}</Card.Title>
                </View>

                <Button
                  buttonStyle={{
                    borderRadius: 50,
                    marginTop: 3,
                    backgroundColor: '#FF1700',
                    marginTop: 15,
                  }}
                  disabled={counter === 0 || amiiboValidation === amiiboHead + amiiboTail}
                  title="Añadir al Carrito"
                  onPress={() => {
                    dispatch(addToCart(product)), navigation.navigate('Cart');
                  }}
                />
              </Card>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    display: 'flex',
    width: '100%',
    alighItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnPlus: {
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: '#FF1700',
  },
  btnMin: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 50,
    backgroundColor: '#FF1700',
    fontSize: 20,
  },
  counter:{
    textAlignVertical: 'center',
    marginHorizontal: 13,
    fontSize: 15,
  }
});

export default DetailsScreen;
