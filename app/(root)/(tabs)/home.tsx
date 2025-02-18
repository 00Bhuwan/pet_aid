import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';
import React from 'react'

const Home = () => {
    const handleSearch = () => {

    }
  return (
    <SafeAreaView className='big-white h-full'>
        <ScrollView contentContainerClassName='h-full'>

            {/* Search */}
            <TouchableOpacity 
            onPress={handleSearch}
                className='bg-white flex flex-row justify-start items-center shadow-md rounded-2xl h-10 py-4 px-8 mt-7 mx-5'
            >
                <Image source={icons.search} className='mr-3 w-14 h-14 self-center'/>
                <TextInput className='text-left font-Gilroy text-black-200 text-1xl w-full h-6'/>
            </TouchableOpacity>

            {/* banner */}
            <View className='flex items-center mt-10'>
                <Image source={images.greenlogo} className='w-10/12 h-52' resizeMode='contain'/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home