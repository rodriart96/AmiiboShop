import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Card, Button, Icon, Image} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../components/ui/logo';
import MiniCart from '../components/ui/miniCart';
import { emptyCart } from '../redux/shoppingCart';

const CheckoutScreen = ({navigation}) => {
  const cartStorage = useSelector(state => state.shoppingCart);
  const{products} = cartStorage;
  const [precio, setPrecio] = useState(0);
  const arrayQuantity = [];
  const arrayPrecios =[];
  const impuesto = precio * 0.2;
  const precioFinal = Math.floor(precio + impuesto);
  let quantity;
  const dispatch = useDispatch();

  useEffect(() => {
    products.map(amiibo=>{
      arrayPrecios.push(amiibo.price);
      arrayQuantity.push(amiibo.quantity)
      quantity = arrayQuantity.reduce((a, b) => a + b, 0)
      setPrecio(amiibo.price * quantity)
    })
  }, [products]);

  return (
    <ScrollView>
      <View>
        <Logo />
        <MiniCart navigation={navigation} />
        <View style={styles.scroll}>
          {cartStorage.products.map(amiibo => {
            return (
              <View style={styles.container} key={amiibo.id}>
                <Card>
                  <Card.Title> Resumen De Articulo</Card.Title>
                  <View style={{flexDirection: 'row'}}>
                    <Card.Image
                      style={{padding: 0, width: 100, height: 130}}
                      resizeMode="contain"
                      source={{
                        uri: amiibo.image,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '70%',
                      }}>
                      <Card.Title
                        style={
                          styles.counter
                        }>{`Amiibo: ${amiibo.name}`}</Card.Title>
                      <Card.Title
                        style={
                          styles.counter
                        }>{`Pesos Chilenos: $${amiibo.price}`}</Card.Title>
                      <Card.Title
                        style={
                          styles.counter
                        }>{`Cantidad de amiibos: ${amiibo.quantity}`}</Card.Title>
                    </View>
                  </View>
                </Card>
              </View>
            );
          })}
          <View style={{width: '100%'}}>
            <Card>
              <Card.Title>Detalle de Costo</Card.Title>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column'}}>
                  <Card.Title>SubTotal: </Card.Title>
                  <Card.Title>Envio: </Card.Title>
                  <Card.Title>Impuestos:</Card.Title>
                  <Card.Title>Total: </Card.Title>
                </View>
                <Card.Divider />

                <View style={{flexDirection: 'column'}}>
                  <Card.Title>{`CLP: $${precio}`} </Card.Title>
                  <Card.Title>GRATIS! </Card.Title>
                  <Card.Title>{`CLP: $${impuesto}`} </Card.Title>
                  <Card.Title>{`CLP: $${precioFinal}`} </Card.Title>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => { alert('Gracias Por Su Compra!'),dispatch(emptyCart()), navigation.navigate('Inicio')}}
          buttonStyle={styles.btnPlus}
          title="Checkout"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    height: 'auto',
    display: 'flex',
    width: '100%',
    alighItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 150,
  },
  btnDelete: {
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#FF1700',
  },
  btnPlus: {
    paddingHorizontal: 120,
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
  counter: {
    textAlignVertical: 'center',
    marginHorizontal: -23,
    fontSize: 15,
  },
});
export default CheckoutScreen;
