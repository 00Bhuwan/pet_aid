import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/app/(root)/(tabs)/context/CartContext";
import product from "@/constants/data";

const allProducts = Object.values(product).flat(); // Combine all product categories

const Home = () => {
  const { addToCart } = useCart();

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-4 font-GentyDemo-Regular">Home</Text>

      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in 2 columns
        contentContainerStyle={{ paddingBottom: 80 }} // Extra space at bottom
        columnWrapperStyle={{ justifyContent: "space-between", gap: 8 }} // Consistent spacing
        renderItem={({ item }) => (
          <View className="bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-md w-[48%]">
            <Image source={item.image} className="w-full h-24 rounded" resizeMode="contain" />
            
            {/* Fixed height for text to align buttons */}
            <View className="h-12 justify-center">
              <Text className="font-semibold text-center" numberOfLines={2}>
                {item.name}
              </Text>
            </View>

            <Text className="font-bold mt-1 text-center">{item.price}</Text>

            <TouchableOpacity
              onPress={() => addToCart(item)}
              className="bg-emerald-500 p-2 rounded mt-2"
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
