import { Image, ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from "@/constants/icons";
import { CartProvider } from "@/app/(root)/(tabs)/context/CartContext";

const TabIcon = ({
  focused,
  icon,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#53b175" : "#666876"}
      resizeMode="contain"
      className="size-10"
    />
    <Text
      className={`${
        focused
          ? "text-primary-300 font-Gilroy"
          : "text-black-200 font-Gilroy"
      } text-xs w-full text-center mt-1`}
    >
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            borderTopColor: "#0061FF1A",
            borderTopWidth: 1,
            minHeight: 70,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.shop} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.explore} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.cart} />
            ),
          }}
        />
        <Tabs.Screen
          name="doctor"
          options={{
            title: "Doctor",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.doctor} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.account} />
            ),
          }}
        />
      </Tabs>
    </CartProvider>
  );
};

export default TabsLayout;
