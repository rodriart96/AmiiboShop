import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import { amiiboLogo } from '../../devVariables';


const Logo =()=>{
    return(<Card>
        <Card.Image
          style={{height: 60, flex:1, paddingHorizontal:20}}
          resizeMode="contain"
          source={{
            uri: amiiboLogo,
          }}
        />
      </Card>)
}
export default Logo;