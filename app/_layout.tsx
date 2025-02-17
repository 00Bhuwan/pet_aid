import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";
import GlobalProvider from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "GentlyDemo-Regular": require("../assets/fonts/GentyDemo-Regular.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{headerShown:false}}/>
    </GlobalProvider>
);
}
