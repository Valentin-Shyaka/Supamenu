import React from 'react'
import { Link } from 'expo-router';
import { View,Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const Signup = () => {
  return (
    <SafeAreaView className='w-full h-full bg-[#e38a3d]'>
      <View className='absolute bg-white w-full h-[85%] p-6 bottom-0 rounded-t-2xl'>
        <Text className=' text-center text-[#e38a3d] font-bold text-4xl'><Text className='text-black'>SUPA</Text>MENU</Text>
        <Text className='text-slate-600 font-bold mt-4 text-center'>Welcome...</Text>
        <Text className='text-slate-300 font-bold mt-4 text-center mb-4'>Signin to continue</Text>

        <View className='mt-6 flex flex-col gap-2 items-center'>


          <View className='border border-slate-200 rounded-lg flex flex-row gap-x-4 p-2 w-full'>

            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
            <TextInput className='' placeholder='Email'></TextInput>
          </View>
          
          <View className='border border-slate-200 rounded-lg flex flex-row gap-x-4 p-2 w-full'>

            <Fontisto name="unlocked" size={24} color="black" />
            <TextInput className='' placeholder='Password'></TextInput>
          </View>

        </View>
        <Link href={'/scan'} className='shadow-lg shadoe-black self-center mt-6 p-4 w-full  bg-[#e38a3d] rounded-lg text-center'><Text className='text-white text-center font-bold'>Sign In</Text></Link>
        <View>
            
            <Text className='text-center font-bold text-slate-400 mt-4'>OR</Text>
        </View>
        
       
        <View className=' self-center p-4 w-full border border-slate-200 rounded-lg flex flex-row m-2 align-middle' pl-4>
            <FontAwesome5 name="google" size={24} color="red" />
            <Text className='text-slate text-center font-bold ml-10'>Log In with Google</Text>
        </View>

        <View className=' self-center p-4 w-full border border-slate-200 rounded-lg flex flex-row m-2 align-middle pl-4'>
            <Feather name="facebook" size={24} color="blue" />
            <Text className='text-slate text-center font-bold ml-10'>Log In with Facebook</Text>
        </View>

        <Text className='text-slate-400 text-center mt-2'>Don't have an account? <Text className='font-bold text-[#e38a3d]'>Register</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default Signup