import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

 const ItemList = ({ text }) => {
     return (
         <View>
             <Text style={style.card}>{text}</Text>
         </View>
     )
 }
const style = StyleSheet.create({
    card:{
        padding:10,
        backgroundColor:'aliceblue',
        margin:3,
        fontSize:25
    }
})

 export default ItemList;