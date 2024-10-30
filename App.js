import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Screen_dangnhap from "./screens/Screen_dangnhap";
import Screen_giaodien from "./screens/Screen_giaodien";
import Screen_dangky from "./screens/Screen_dangky";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screen_dangky"screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Screen_dangnhap" component={Screen_dangnhap} />
            <Stack.Screen name="SScreen_giaodiencreen_02" component={Screen_giaodien} />
            <Stack.Screen name="Screen_dangky" component={Screen_dangky} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
