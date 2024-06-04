import {Text,ScrollView,SafeAreaView,View,Pressable, StatusBar, Modal} from "react-native"
import { Link } from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useState } from "react";
const App = () => {
    const [isModalActive,setIsModalActive]= useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
              
                <StatusBar backgroundColor={'white'} className=''/>
                <View className={isModalActive ?`relative w-screen h-screen p-6 opacity-60 `:`relative w-screen h-screen p-6`}>
                    <View className='w-full h-48  border border-slate-300 mt-2 rounded-lg p-4 bg-black'>
            
                        <Fontisto name="visa" size={24} color="gold" />
                        <Text className='text-white font-bold text-lg text-center justify-center '>**** **** **** 7170</Text>

                        <View className='absolute w-full p-4 flex flex-row justify-between  bottom-2 '>
                            <View>
                                <Text className='text-white'>Name</Text>
                                <Text className='text-white font-bold'>CHASSIE PARKHURST</Text>
                            </View>

                            <View >
                                <Text className='text-white'>Expiry</Text>
                                <Text className='text-white font-bold'>04/2023</Text>
                            </View>
                        </View>
                     
                    </View>

                    <View className='self-center mt-4'>
                        <FontAwesome5 name="ellipsis-h" size={24} color="black" />
                    </View>

                    <View className='bg-white w-full rounded-lg h-80 mt-2 p-4'>
                        <Text className='font-bold '>Payment Method</Text>
                        <View className='flex flex-row mt-2 gap-x-2 '>
                            <View className='w-20 h-12 border justify-center items-center border-slate-200 rounded-lg '>
                                <Zocial name="bitcoin" size={30} color="gold" />
                            </View>
                            <View className='w-20 h-12 border justify-center items-center border-slate-200 rounded-lg '>
                                <FontAwesome5 name="apple-pay" size={30} color="black" />
                            </View>
                            <View className='w-20 h-12 border justify-center items-center border-slate-200 rounded-lg '>
                                <FontAwesome5 name="paypal" size={24} color="blue" />
                            </View>
                        </View>
                        <Text className='text-center mt-2 font-bold text-slate-500'>or use <Text className='text-orange-500'>QR code</Text></Text>
                        <View className='self-center mt-4 '>
                            <MaterialCommunityIcons name="qrcode-scan" size={60} color="black" />
                        </View>
                        <View className='px-4 py-2 bg-slate-300 rounded-lg mt-4  flex flex-row justify-between' >
                                <Text className='font-bold text-lg'>Total</Text>
                                <View className='flex flex-row justify-center items-center gap-x-2'>
                                    <Text className=' font-extrabold  text-lg'>$5.99</Text>
                                    <View className='bg-white rounded-lg'>
                                    <Entypo name="chevron-up" size={24} color="black" />
                                    </View>
                                </View>

                        </View>

                        <Text className='bg-[#ef943e] p-2 h-10 w-full text-center text-white font-bold mt-4 rounded-lg' onPress={()=>{setIsModalActive(!isModalActive)}}>
                        <Text >Pay now</Text>
                        </Text>
                        
                        

                    </View>
                        
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isModalActive}
                    onRequestClose={() => {
                    setIsModalActive(!isModalActive);
                    }}
                    >
                    <View className='p-4 w-full h-screen justify-center ' >
                    <View  className='bg-white rounded-lg p-4 '>
                        
                        <Pressable onPress={()=>{ setIsModalActive(!isModalActive)} }className='absolute right-2 top-2'>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                        <Text className=' font-bold text-md text-center'>Your Payment was processed</Text>
                        <View className='self-center mt-4'>
                            <Feather name="check-circle" size={40} color="green" />
                        </View>
                        
                        
                    </View>
                    </View>
                </Modal>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default App