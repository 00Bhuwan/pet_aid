import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-GentyDemo-Regular text-3xl">Hello world</Text>
      <Link href= "/sign-in">Sign In</Link>
      <Link href= "/explore">Explore</Link>
      <Link href= "/cart">Cart</Link>
      <Link href= "/favourite">Favourite</Link>
      <Link href= "/doctor">Doctor</Link>
      <Link href= "/account">Account</Link>
    </View>
  );
}
