import { Stack } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import '@/global.css'

if (Platform.OS === "web") {
  (
    StyleSheet as typeof StyleSheet & {
      setFlag?: (name: string, value: string) => void;
    }
  ).setFlag?.("darkMode", "class");
}

export default function RootLayout() {
    return <Stack screenOptions={{headerShown: false}}/>;
}
