import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) =>{

    return(
        <View style={styles.container}>
            <Text>
                Home screen
            </Text>
            <Button
                title= 'hace click'
                onPress={()=>alert('lo hiciste')}
            />
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    }
})
export default HomeScreen;