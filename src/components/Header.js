import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import iconSearch from "..//assets/iconSearch.png"
export default function Header({ title, onBack }) {
    return (
        <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' ,alignItems:'center',gap:20}}>

            <Pressable style={{}} onPress={onBack}> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8.84092 1.84091L7.5 0.5L0 8L7.5 15.5L8.84092 14.1591L2.68182 8L8.84092 1.84091Z" fill="#9095A0" />
            </svg> </Pressable>

            <Text style={{color:'#171A1F',fontSize:24,flex:1,textAlign:'left',fontWeight:'bold'}}>
                {title}
            </Text>
            <Image source={iconSearch} style={{ width: 24, height: 24 }} />

        </View>
    )



}