import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const SignIn = ( ) => {
    const { refetch, loading, isLoggedIn } = useGlobalContext();
    
    if (!loading && isLoggedIn) return <Redirect href="/"/>
    
    const handleLogin = async () => {
        const result = await login();
        if(result){
            refetch();
        }
        else{
            Alert.alert('Error', "Failed to login");
        }
    };
    const handleSignUp = () => {

    };
    const handleGoogleLogin = () => {

    };
    const handleFacebookLogin = () => {

    };
    

  return (
    <SafeAreaView className = "big-white h-full">
        <ScrollView contentContainerClassName='h-full'>

            {/* LOGO  */}
            <View className="flex items-center mt-12">
                <Image source={images.greenlogo} className='w-48 h-48' resizeMode='contain'/>
            </View>

            {/* TiTle */}
            <View className='px-10 mt-6'>
                <Text className='text-left font-Gilroy text-black-300 text-2xl'>
                    Getting Started with PetAid
                </Text>
                
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

                {/* SignIn button */}
                <TouchableOpacity 
                onPress={handleSignUp} 
                className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                    <View className="text-white text-2xl font-Gilroy text-center">
                        <Text className='text-white text-2xl font-Gilroy text-center'>
                            Sign Up
                        </Text>
                    </View> 
                </TouchableOpacity>
                
                {/* Line  */}
                <View className="flex items-center mt-12">
                    <Image source={icons.line} className='w-full h-2' resizeMode='contain'/>
                </View>

                <Text className="text-center text-gray-400 mt-6">
                    Or connect with social media
                </Text>

                {/* Google Login Button */}
                <TouchableOpacity
                    onPress={handleGoogleLogin}
                        className="bg-blue-500 flex flex-row items-center justify-center shadow-md rounded-3xl w-full py-4 mt-7"
                    >
                    <Image source={icons.google} className="mr-3" />
                        <Text className="text-white text-2xl font-Gilroy">
                            Continue with Google
                        </Text>
                </TouchableOpacity>

                {/* Facebook Login Button */}
                <TouchableOpacity
                    onPress={handleFacebookLogin}
                    className="bg-blue-700 flex flex-row items-center justify-center shadow-md rounded-3xl w-full py-4 mt-5 mb-20"
                    >
                    <Image source={icons.facebook} className="mr-3" />
                    <Text className="text-white text-2xl font-Gilroy">
                        Continue with Facebook
                    </Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn