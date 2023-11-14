import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';

export default function ShopItem({nameShop,street,timeShip,img,drinks,status,navigation}) {
    return (
        <Pressable
        onPress={()=>navigation.navigate("API_SCREEN3",drinks)}
        style={{ height: 200, gap:10 }}>
            <Image source={{ uri: img }} 
            style={{ width: '100%', height: 114,borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} />
            <View style={{ paddingTop: 7, paddingRight: 7, paddingLeft: 7 }}>
                <View style={{ flexDirection: 'row', gap: 30 }}>

                    <Text style={{color:'#1DD75B'}}>{ status ? "Accepting Orders":"Busy"}</Text>
                    <Text style={{ color: '#DE3B40' }}>{timeShip}</Text>
                </View>
                <Text style={{color:'#171A1F',fontWeight:'bold'}}>{nameShop}</Text>
                <Text style={{}}>{street}</Text>

            </View>
        </Pressable>
    )



}