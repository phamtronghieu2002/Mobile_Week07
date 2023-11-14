import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import DrinkItem from "../components/DrinkItem";
function API_SCREEN3({ navigation, route }) {
  const [drinks, setDrinks] = useState(route.params);
  console.log(route.params);
  return (
    <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Header
        title="Dink"
        onBack={() => {
          navigation.navigate("API_SCREEN2");
        }}
      />
      <View style={{ gap: 20 }}>
        {drinks.map((drink, index) => (
          <DrinkItem {...drink} />
        ))}
      </View>
    </ScrollView>
  );
}

export default API_SCREEN3;
