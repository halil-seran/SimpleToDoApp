import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import ItemList from './ItemList';

export default class App extends Component{

  constructor(){
    super();
    this.state={
      text:'',
      data:[]
    }
  }

  handleSave = () => {
    const { text , data } = this.state;
    data.push({ text });
    this.setState({ data , text:''})

    alert('Eklendi')
  };

  render(){
    const { text, data } = this.state;
    return(
      <View style={{flex:1,paddingTop:30}}>
        <View style={styles.title}>
          <Text style={{fontSize:30,fontWeight:'600'}}>To-Do App</Text>
        </View>
        <View style={{backgroundColor:'thistle',flexDirection:'row'}}>
          <TextInput style={styles.input} 
                     value={text}
                     onChangeText={(text) =>this.setState({ text })} />
          <TouchableOpacity onPress={this.handleSave} style={styles.button}>
            <Text style={{color:'white',fontSize:23}}>EKLE</Text> 
          </TouchableOpacity>
        </View>
        <View>
          {data.map((item) =>{
            return <ItemList text={item.text} />
           })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    backgroundColor:'plum',
    padding:5,
    alignItems:'center'
  },
  input:{
    padding:10,
    flex:3
  },
  button:{
    flex:1,
    padding:10,
    backgroundColor:'black',
    borderRadius:100,
    alignItems:'center',
    marginLeft:10
    
  }
});
