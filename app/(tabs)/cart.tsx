import {Text,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { Image } from "react-native"
import image from '../../images/burger.jpg'
import { SafeAreaView } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { router } from "expo-router"

const Cart = () => {
    return (
        <SafeAreaView >
            <ScrollView contentContainerStyle={{
                height: 800
            }} >
                    <Image source={image} alt="" className=" w-full  h-52" />
                    <ScrollView className='absolute top-48 w-full rounded-t-2xl bg-white p-4  '>
                        <View className='flex flex-row justify-between'>
                        <Text className='font-bold text-xl'>Cheese burger</Text>
                        <Text className='text-2xl font-bold text-orange-600'>$4.96 </Text>
                        </View>
                        <Text className='text-center mt-2 font-bold text-2xl underline'>Details</Text>

                        <View className='p-6 mt-2  gap-y-4'>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Weight</Text>
                                <Text className='text-slate-500 font-bold '>200g</Text>
                            </View>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Payment code</Text>
                                <Text className='text-slate-500 font-bold '>**927**</Text>
                            </View>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Delivery time</Text>
                                <Text className='text-slate-500 font-bold '>30.Min</Text>
                            </View>
                           
                        </View>
                        <View className='px-4 py-2 flex flex-row justify-between' >
                                <Text className='font-extrabold text-lg'>Total</Text>
                                <Text className=' font-extrabold  text-lg'>$5.99</Text>
                        </View>

                        <Text className='text-xl font-bold mt-2 '>Payment options</Text>
                        
                        <View className='mt-4 w-full bg-[#3be691] h-20 rounded-lg flex flex-row justify-between items-center p-4 '>
                            <Zocial name="bitcoin" size={40} color="black" />
                            <Text className='text-white p-2 border border-slate-200 rounded-lg '>Bitcoin wallet</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>{router.push('/cardPayment')}} className='w-full h-28  border border-slate-300 mt-2 rounded-lg p-4'>
                            <View className='flex flex-row items-center justify-between gap-x-6 border-b border-b-slate-300 h-[60%]'>
                                <Fontisto name="visa" size={24} color="blue" />
                                <Text className='text-lg font-bold text-slate-400'>***** **** 274</Text>
                                <Text className='text-green-500 font-bold'>Verified</Text>
                            </View>
                            <View className='mt-2 flex flex-row justify-between'>
                                <Text className='font-bold '>Debit card</Text>
                                <Text>EXP: 10/16</Text>
                            </View>

                        </TouchableOpacity>
                        
                        <Text className='mt-4 p-4 rounded-lg w-full text-center text-white font-bold bg-[#e99342]'>Other...</Text>
                       
                        
                      
                    </ScrollView> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Cart