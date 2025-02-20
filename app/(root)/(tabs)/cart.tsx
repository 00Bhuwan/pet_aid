import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useCart } from "@/app/(root)/(tabs)/context/CartContext";
import { useRouter } from "expo-router";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-4">Cart</Text>

      {cart.length === 0 ? (
        <Text className="text-center text-gray-500">Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center justify-between p-2 border-b">
                <Image source={item.image} className="w-12 h-12 rounded" />
                <Text className="flex-1 ml-4">{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            )}
          />
          <TouchableOpacity
            onPress={clearCart}
            className="bg-red-500 p-3 mt-4 rounded"
          >
            <Text className="text-white text-center font-bold">Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity
        onPress={() => router.push("/explore")}
        className="bg-blue-500 p-3 mt-4 rounded"
      >
        <Text className="text-white text-center font-bold">Go to Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
