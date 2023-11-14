import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';

export default function DrinkItem({img,price,name}) {
    return (
        <Pressable
        style={{flexDirection:'row' ,gap:15}}>
            <Image source={{ uri: img }} 
            style={{height:50,width:100,borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} />
            <View style={{ flex:1}}>
                <Text style={{  fontSize:17,fontWeight:'bold'}}>{name}</Text>
                <View style={{  }}>

                </View>
                <Text style={{  }}>{price}</Text>
            </View>
        </Pressable>
    )



}