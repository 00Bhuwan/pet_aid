import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Link } from 'expo-router';

const SignUp = () => {
    const handleSignUp = () => {

    };
    const handleSwitch = () => {

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
                    Sign Up
                </Text>
            </View>
            <View className='px-10 mt-1'>
                <Text className='text-left font-Gilroy text-black-100 text-1xl'>
                    Enter your credentials to continue.
                </Text>
            </View>

            <View className='px-10 mt-8'>
                <Text className='text-left font-Gilroy text-black-200 text-1xl'>
                    Username
                </Text>
            </View>

            {/* code for entering Username */}
            <View className='px-10 py-1 flex'>
                <View className='text-left font-Gilroy text-black-200 text-1xl'>
                    <TextInput
                        placeholder='Enter Username'
                        placeholderTextColor= '#b0b3b5'
                        className='text-left font-Gilroy text-black-300 text-1.8xl mb-0 pb-0'/>
                        <Image source={icons.line} className='w-full h-1 mt-1 pt-0'/>
                </View>
            </View>

            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-200 text-1xl'>
                    E-mail
                </Text>
            </View>

            {/* code for entering email */}
            <View className='px-10 mt-2'>
            <View className='text-left font-Gilroy text-black-200 text-1xl'>
                    <TextInput
                        placeholder='Enter E-mail'
                        placeholderTextColor= '#b0b3b5'
                        className='text-left font-Gilroy text-black-300 text-1.8xl mb-0 pb-0'/>
                        <Image source={icons.line} className='w-full h-1 mt-1 pt-0'/>
                </View>
            </View>

            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-200 text-1xl'>
                    Password
                </Text>
            </View>

            {/* code for entering password */}
            <View className='px-10 mt-2'>
            <View className='text-left items-center font-Gilroy w-full flex-row'>
                <View className='flex-1'>
                    <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor= '#b0b3b5'
                        className='text-left font-Gilroy text-black-300 text-1.8xl mb-0 pb-0'/>
                </View>
                <View   >
                        <TouchableOpacity 
                        onPress={handleSwitch}
                        className='text-center'>
                            <Image source={icons.forget}/>
                        </TouchableOpacity>
                </View>
            </View>
                <Image source={icons.line} className='w-full h-1 mt-1 pt-0'/>
            </View>

            <View className='px-10 mt-6'>
                <Text className='text-center font-Gilroy text-black-100 text-1xl'>
                By continuing you agree to our {" "}
                {/* <Link href=''> */}
                <Text className='text-right font-Gilroy text-emerald-500 text-1xl'>
                Terms of Service and Privacy Policy.
                </Text>
                </Text>
                {/* </Link> */}
            </View>

            {/* SignUp button */}
            <TouchableOpacity 
            onPress={handleSignUp} 
            className="bg-green-500 shadow-md shadow-zinc-300 rounded-full py-4 mt-5 mx-7">
                <View className="text-white text-2xl font-Gilroy text-center">
                    <Text className='text-white text-2xl font-Gilroy text-center'>
                        Sign Up
                    </Text>
                </View> 
            </TouchableOpacity>

            <View className='px-10 mt-6'>
                <Text className='text-center font-Gilroy text-black-200 text-1xl'>
                    Already have an account?{" "}
                <Link href={'/log-in'}>
                <Text className='font-Gilroy text-emerald-500 text-1xl'>
                    Log In
                </Text>
                </Link>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default SignUp
