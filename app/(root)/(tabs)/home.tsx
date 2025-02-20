import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/app/(root)/(tabs)/context/CartContext";
import product from "@/constants/data";

const allProducts = Object.values(product).flat(); // Combine all product categories

const Home = () => {
  const { addToCart } = useCart();

  return (
    <View className="flex-1 bg-white p-4 ">
      <Text className="text-xl font-bold text-center mb-4">Home</Text>

      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in 2 columns
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View className="bg-gray-100 rounded-lg p-2 m-1 shadow-md w-[48%]">
            <Image source={item.image} className="w-full h-20 rounded" resizeMode="contain" />
            <Text className="font-semibold mt-2">{item.name}</Text>
            <Text className="text-gray-500 text-sm">2L, Pcs</Text>
            <Text className="font-bold mt-1">{item.price}</Text>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              className="bg-blue-500 p-2 rounded mt-2"
            >
              <Text className="text-white text-center">Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
