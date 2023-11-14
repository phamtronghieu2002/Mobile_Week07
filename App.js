import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import APIScreen1 from "./src/screens/APIScreen1";
import APIScreen2 from "./src/screens/APIScreen2";
import API_SCREEN3 from "./src/screens/APIScreen3";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="API_SCREEN2" component={APIScreen2} />
        <Stack.Screen options={{ headerShown: false }} name="API_SCREEN1" component={APIScreen1} />
        <Stack.Screen options={{ headerShown: false }} name="API_SCREEN3" component={API_SCREEN3} />


      </Stack.Navigator>
    </NavigationContainer>

  );

}
