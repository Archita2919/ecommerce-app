import { Stack } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import '@/global.css'
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Toast from "react-native-toast-message";

if (Platform.OS === "web") {
  (
    StyleSheet as typeof StyleSheet & {
      setFlag?: (name: string, value: string) => void;
    }
  ).setFlag?.("darkMode", "class");
}

export default function RootLayout() {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <CartProvider>
        <WishlistProvider>
          <Stack screenOptions={{headerShown: false}}/>
          <Toast />
        </WishlistProvider>
      </CartProvider>
      </GestureHandlerRootView>
      
    )
}
