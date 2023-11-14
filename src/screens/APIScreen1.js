import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
export default  function APIScreen1({navigation,route}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap:50 }}>
            <Text style={{fontSize:25}}>
                Welcome to Cafe world
            </Text>
            <Image source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmCDmAkNJVrJt2Pj5JEtUutjY86D70y1qUWj17HE9rAd4rYRd9" }} style={{ width: 200, height: 62 }} />

            <Image source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmCDmAkNJVrJt2Pj5JEtUutjY86D70y1qUWj17HE9rAd4rYRd9" }} style={{ width: 200, height: 62 }} />
            <Pressable style={{width:312,height:50,backgroundColor:'#00BDD6',justifyContent:'center',marginTop:100}} onPress={() => navigation.navigate('apiScreen2', {})}> <Text style={{textAlign:'center'}}> GET Started </Text> </Pressable>
       
        </View>
    )



}