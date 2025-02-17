import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';

const LogIn = () => {
    const handleLogin = () => {

    };
  return (
    <SafeAreaView className='big-white h-full'>
        <ScrollView contentContainerClassName='h-full'>

            {/* LOGO */}
            <View className='flex items-center mt-12'>
                <Image source={images.greenlogo} className='w-32 h-32' resizeMode='contain'/>
            </View>

            {/* Title */}
            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-300 text-3xl'>
                    Log In
                </Text>
            </View>
            <View className='px-10 mt-1'>
                <Text className='text-left font-Gilroy text-black-100 text-1xl'>
                    Enter your email and password
                </Text>
            </View>

            <View className='px-10 mt-8'>
                <Text className='text-left font-Gilroy text-black-100 text-1xl'>
                    Email
                </Text>
            </View>

            {/* code for entering email */}
            <View className='px-10 mt-6'>
                <View className='text-left font-Gilroy text-black-100 text-1xl'>
                    <TextInput
                        value='search'
                </View>
            </View>

            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-100 text-1xl'>
                    Password
                </Text>
            </View>

            {/* code for entering password */}

            <View className='px-10 mt-6'>
                <Text className='text-right font-Gilroy text-black-100 text-1xl'>
                    Forget password?
                </Text>
            </View>

            {/* Login button */}
            <TouchableOpacity 
            onPress={handleLogin} 
            className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                <View className="text-white text-2xl font-Gilroy text-center">
                    <Text className='text-white text-2xl font-Gilroy text-center'>
                        Log In
                    </Text>
                </View> 
            </TouchableOpacity>

            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-200 text-1xl'>
                    Don't have an account? SignUp
                </Text>
                <Text className='text-left font-Gilroy text-green text-1xl'>
                    SignUp
                </Text>
            </View>


        </ScrollView>
    </SafeAreaView>
    
  )
}

export default LogIn
