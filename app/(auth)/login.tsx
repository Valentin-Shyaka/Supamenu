import React from 'react'
import { View,Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';



const Login = () => {
  return (
    <SafeAreaView className='w-full h-full bg-[#e38a3d]'>
      <View className='absolute bg-white w-full h-[85%] p-6 bottom-0 rounded-t-2xl'>
        <Text className=' text-center text-[#e38a3d] font-bold text-4xl'><Text className='text-black'>SUPA</Text>MENU</Text>
        <Text className='text-slate-600 font-bold mt-4 text-center'>Welcome...</Text>
        <Text className='text-slate-300 font-bold mt-4 text-center mb-4'>Please fill in the information</Text>

        <View className='mt-6 flex flex-col gap-2 items-center'>
          <View className='border border-slate-200 rounded-lg flex flex-row gap-x-4 p-2 w-full'>

            <Feather name="user" size={24} color="black" />
            <TextInput className='' placeholder='Full Name'></TextInput>
          </View>

          <View className='border border-slate-200 rounded-lg flex flex-row gap-x-4 p-2 w-full'>

            <Foundation name="telephone" size={24} color="black" />
            <TextInput className='' placeholder='Phone Number'></TextInput>
          </View>

          <View className='border border-slate-200 rounded-lg flex flex-row gap-x-4 p-2 w-full'>

            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
            <TextInput className='' placeholder='Email'></TextInput>
          </View>
        </View>
        <TouchableOpacity className=' shadow-xl shadow-black  self-center mt-6 p-4 w-full  bg-[#e38a3d] rounded-lg'><Text className='text-white text-center font-bold'>Proceed</Text></TouchableOpacity>
        <Text className='text-center font-bold text-slate-400 mt-4'>OR</Text>
        <Text className='text-slate-400 text-center mt-2'>if you have a PMG account</Text>

        <Link href={'/signup'} className='text-center w-full shadow-xl shadow-black self-center mt-4 p-4 bg-[#e38a3d] rounded-lg'>
          <Text className='text-white text-center font-bold'>Sign In</Text>
        </Link>

        <Text className='text-slate-400 text-center mt-2'>Don't have an account? <Text className='font-bold text-[#e38a3d]'>Register</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default Login