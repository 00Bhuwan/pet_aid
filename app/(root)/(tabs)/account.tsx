import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Link } from "expo-router";


const MyAccountScreen: React.FC = () => {
  const menuItems = [
    { title: "Orders", screen: "Orders" },
    { title: "My Details", screen: "MyDetails" },
    { title: "Delivery Address", screen: "DeliveryAddress" },
    { title: "Payment Methods", screen: "PaymentMethods" },
    { title: "Promo Code", screen: "PromoCode" },
    { title: "Notifications", screen: "Notifications" },
    { title: "Help", screen: "Help" },
    { title: "About", screen: "About" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4">
        {/* Profile Section */}
        <View className="flex-row items-center mb-4">
          <View className="rounded-full bg-gray-300 w-16 h-16 mr-4 justify-center items-center">
            {/* You can add a profile image here */}
            <Image source={images.petaid} // Replace with your user icon path or profile image
              className="w-full h-full rounded-full" 
            />
          </View>
          <View>
            <Text className="text-xl font-bold">PetAid</Text>
            <Text className="text-gray-500">petaid@gmail.com</Text>
          </View>
          <TouchableOpacity className="ml-auto">
            <Image 
              source={images.fav} // Replace with your edit icon path
              className="w-6 h-6" 
            />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              className="py-3 border-b border-gray-200 flex-row items-center" // Added flex-row and items-center
              // Add onPress navigation if you have screens set up
              // onPress={() => navigation.navigate(item.screen)} 
            >
              <Text className="text-base flex-1">{item.title}</Text> {/* Added flex-1 to push arrow to the right */}
              <Image 
                source={icons.back} // Replace with your arrow icon path
                className="w-4 h-4" 
              />
            </TouchableOpacity>
          )}
        />

        {/* Log Out Button */}
          <View> {/* Added a View to wrap the TouchableOpacity */}
            <TouchableOpacity className="mt-8 bg-gray-200 py-2 rounded-md items-center">
        <Link href={'/sign-in'}>
              <Text className="text-base text-red-500 font-medium">Log Out</Text>
        </Link>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAccountScreen;