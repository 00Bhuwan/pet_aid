import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Image, Button,ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "@/app/(root)/(tabs)/context/CartContext";
import product from "@/constants/data";

const categories = [
  { name: "Food", key: "food" },
  { name: "Toys & Accessories", key: "toys" },
  { name: "Grooming Tools", key: "grooming" },
  { name: "Safety Collar & Leash", key: "safety" },
  { name: "Bedding & Housing", key: "bedding" },
  { name: "Medicines", key: "medicine" },
  { name: "Clothes", key: "clothes" },
  { name: "Bowls, Feeder & Water Dispenser", key: "bowls" },
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart, cart } = useCart();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-4">Find Products</Text>
      <ScrollView>
        <View className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              className="bg-green-300 rounded-lg p-4 shadow-md"
              onPress={() => setSelectedCategory(cat.key)}
            >
              <Text className="text-center font-semibold">{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Button title="Go to Cart" onPress={() => router.push("/cart")} />

      {/* Modal for Category Items */}
      <Modal visible={!!selectedCategory} animationType="slide" transparent={true}>
        <View className="flex-1 bg-white p-6">
          <TouchableOpacity onPress={() => setSelectedCategory(null)}>
            <Text className="text-right text-red-500 font-bold">Close</Text>
          </TouchableOpacity>

          {selectedCategory && (
            <>
              <Text className="text-lg font-bold mb-2">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products</Text>
              <FlatList
                data={product[selectedCategory as keyof typeof product]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="flex-row items-center justify-between p-2 border-b">
                    <Image source={item.image} className="w-12 h-12 rounded" />
                    <Text className="flex-1 ml-4">{item.name}</Text>
                    <Text className="px-2">{item.price}</Text>
                    <TouchableOpacity
                      onPress={() => addToCart(item)}
                      className="bg-emerald-500 px-4 py-1 rounded"
                    >
                      <Text className="text-white">Add</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Explore;
