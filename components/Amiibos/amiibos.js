import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import axios from 'axios';
import {reset} from '../../redux/counter/index';
import {useSelector, useDispatch} from 'react-redux';
import {instancia} from '../../devVariables';

const Amiibos = (props) => {
  const {navigation} = props;
  const [price, setPrice] = useState();
  let amiiboPrice = [];
  const dispatch = useDispatch();
  const [marioBros, setMarioBros] = useState([]);
  const [Pokemon, setPokemon] = useState([]);
  const [Zelda, setZelda] = useState([]);

  

  function generatePrice() {
    const numeroRandom = Math.floor(Math.random() * 100000) + 1000;
    if (numeroRandom % 10 === 0) {
      setPrice(numeroRandom);
    } else {
      generatePrice();
    }
  }
  useEffect(() => {
    async function fetchAmiibos() {
      const requestMario = await axios.get(`${instancia}?gameseries=super mario`);
      setMarioBros(requestMario.data.amiibo);

      const requestPokemon = await axios.get(`${instancia}?gameseries=pokemon`);
      setPokemon(requestPokemon.data.amiibo);

      const requestZelda = await axios.get(`${instancia}?gameseries=the legend of zelda`);
      setZelda(requestZelda.data.amiibo);

    }
    fetchAmiibos();
    generatePrice();
  }, []);

  return (
    <View style={styles.scroll}>
      {marioBros.map(amiibo => {
        return (
          <View style={styles.container} key={amiibo.tail}>
            <Card>
              <Card.Title>{amiibo.amiiboSeries}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0}}
                resizeMode="contain"
                source={{
                  uri: amiibo.image,
                }}
              />
              <Card.Title>{`CLP: $${price} `}</Card.Title>
              <Button
                buttonStyle={{
                  height: 37,
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 3,
                  backgroundColor: '#FF1700',
                  borderRadius: 20,
                }}
                title="Ver Amiibo"
                onPress={() => {
                  dispatch(reset()),
                    navigation.navigate('Detalle', {
                      amiiboHead: amiibo.head,
                      amiiboTail: amiibo.tail,
                      amiiboPrice,
                      amiiboImg: amiibo.image,
                      amiiboName: amiibo.character,
                      amiiboPrice: price,
                    });
                }}
              />
            </Card>
          </View>
        );
      })}
       {Pokemon.map(amiibo => {
        return (
          <View style={styles.container} key={amiibo.tail}>
            <Card>
              <Card.Title>{amiibo.amiiboSeries}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0}}
                resizeMode="contain"
                source={{
                  uri: amiibo.image,
                }}
              />
              <Card.Title>{`CLP: $${price} `}</Card.Title>
              <Button
                buttonStyle={{
                  height: 37,
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 3,
                  backgroundColor: '#FF1700',
                  borderRadius: 20,
                }}
                title="Ver Amiibo"
                onPress={() => {
                  dispatch(reset()),
                    navigation.navigate('Detalle', {
                      amiiboHead: amiibo.head,
                      amiiboTail: amiibo.tail,
                      amiiboPrice,
                      amiiboImg: amiibo.image,
                      amiiboName: amiibo.character,
                      amiiboPrice: price,
                    });
                }}
              />
            </Card>
          </View>
        );
      })}
       {Zelda.map(amiibo => {
        return (
          <View style={styles.container} key={amiibo.tail}>
            <Card>
              <Card.Title>{amiibo.amiiboSeries}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0}}
                resizeMode="contain"
                source={{
                  uri: amiibo.image,
                }}
              />
              <Card.Title>{`CLP: $${price} `}</Card.Title>
              <Button
                buttonStyle={{
                  height: 37,
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 3,
                  backgroundColor: '#FF1700',
                  borderRadius: 20,
                }}
                title="Ver Amiibo"
                onPress={() => {
                  dispatch(reset()),
                    navigation.navigate('Detalle', {
                      amiiboHead: amiibo.head,
                      amiiboTail: amiibo.tail,
                      amiiboPrice,
                      amiiboImg: amiibo.image,
                      amiiboName: amiibo.character,
                      amiiboPrice: price,
                    });
                }}
              />
            </Card>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    display: 'flex',
    width: '100%',
    alighItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100,
  },
});
export default Amiibos;
