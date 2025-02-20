import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Use expo vector icons
import { doctorsData } from "@/constants/data"; // Data file for doctors

// Card component to display individual doctor details
interface Doctor {
  id: string;
  name: string;
  degree: string;
  specialties: string;
  image: any; // You can refine this based on your image handling (e.g., ImageSourcePropType from React Native)
}

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <View className="bg-white rounded-2xl shadow-md mt-3 mb-3 ml-4 mr-4 pt-4 pb-4 pl-4 pr-4">
      {/* Doctor Image */}
      <View className="items-center">
        <Image
          source={doctor.image}
          className="w-32 h-32 rounded-full"
        />
      </View>

      {/* Doctor Info */}
      <View className="items-center mt-2">
        <Text className="text-xl font-bold">{doctor.name}</Text>
        <Text className="text-gray-600">{doctor.degree}</Text>
        <Text className="text-gray-700 mt-1">Specialties</Text>
        <Text className="text-gray-700">{doctor.specialties}</Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-around mt-4">
        <ActionButton iconName="call" />
        <ActionButton iconName="chatbubble" />
        <ActionButton iconName="calendar" />
        <ActionButton iconName="eye" />
      </View>
    </View>
  );
};

type IoniconsIconName = "call" | "chatbubble" | "calendar" | "eye" | "person"; // Restrict to valid icon names

interface ActionButtonProps {
  iconName: IoniconsIconName; // Only valid Ionicons names
}

// ActionButton component to handle each button's icon
const ActionButton = ({ iconName }: ActionButtonProps) => (
  <TouchableOpacity className="bg-green-400 rounded-lg p-2 flex items-center justify-center">
    <Ionicons name={iconName} size={20} color="white" />
    {/* Optional text label next to icon */}
    <Text className="text-white text-xs mt-1">{iconName}</Text> 
  </TouchableOpacity>
);

// Main component to render the list of doctors
const Doctor = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 70 }}> {/* Added bottom margin to avoid overlap with tab bar */}
      <FlatList
        data={doctorsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
      />
    </SafeAreaView>
  );
};

export default Doctor;
