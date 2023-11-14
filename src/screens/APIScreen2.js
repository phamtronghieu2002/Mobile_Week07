import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import ShopItem from '../components/ShopItem';
import { useEffect, useState } from 'react';
export default  function APIScreen2({navigation,route}){

    const [shops,setShop]=useState([]);
    useEffect(()=>{

        fetch('https://6540a3af45bedb25bfc23aa3.mockapi.io/api/v1/shops')
      .then(response => response.json())
      .then(data => setShop(data))
    },[])
    return (
        <ScrollView style={{paddingLeft:20,paddingRight:20 }}>
          <Header
          title="Shops Near Me"
          onBack={()=>{navigation.navigate("API_SCREEN1")}}
          />
           {
            shops.map((shops,index)=> <ShopItem {...{...shops,navigation}}    key={index}/>)
           }
        </ScrollView>
    )



}