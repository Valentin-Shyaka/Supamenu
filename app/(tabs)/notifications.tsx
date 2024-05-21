import {Text,SafeAreaView,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { Image } from "react-native"
import image from '../../images/menu.jpg'
import image2 from '../../images/banjo.jpg'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Notifications = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen h-screen  bg-[#fdfcfb] '>
                    <Image source={image} alt="" className=" w-full rounded-b-3xl h-72" />
                    <View className=' p-2 w-full'>
                        <Text className='text-xl font-bold '>Sushi n' chips / Dessert</Text>
                        <View className=' mt-2 flex flex-row w-full '>
                            <View className='flex flex-row'>
                                <AntDesign name="star" size={16} color="gold" />
                                <AntDesign name="star" size={16} color="gold" />
                                <AntDesign name="star" size={16} color="gold" />
                                <AntDesign name="star" size={16} color="gold" />
                                <FontAwesome name="star-half-empty" size={16} color="gold" />
                            </View>
                            <Text className='ml-4 font-bold text-slate-400'>4.4 (198)</Text>
                        </View>
                        <View className='mt-2 flex flex-row w-full justify-between'>
                            <Text className='mt-2 text-bold text-xl font-bold  '><Text className='text-orange-600'>$</Text>4.56</Text>
                            <TouchableOpacity className=' bg-[#d5843d] p-2 w-20 h-10 rounded-3xl  '><Text className='text-center text-white font-bold '>Buy</Text></TouchableOpacity>
                        </View>
                    </View>
                    <Text className='p-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.doloremque animi consequatur nobis quasi atque eligendi modi laborum odit rem.</Text>
                    <Text className='p-2 font-bold text-lg'>Choice of Addon</Text>

                    <View className=' w-full p-2 h-fit rounded-md flex  flex-col'>
                        <View className='relative flex flex-row items-center mb-4'>
                            <Image source={image2} alt="" className=" w-14 rounded-b-3xl h-14 rounded-md" />
                            <Text className='font-bold text-md ml-4 '>Egg dessert</Text>
                            <Text className='absolute right-16 font-bold text-slate-400 ml-10'>+ $2.46</Text>
                            <View className='absolute right-4'>
                            <Feather name="check-circle" size={24} color="orange" className='ml-6' />
                            </View>
                        </View>
                        <View className='relative flex flex-row items-center'>
                            <Image source={image2} alt="" className=" w-14 rounded-b-3xl h-14 rounded-md" />
                            <Text className='font-bold text-md ml-4 '>Shrimp dessert</Text>
                            <Text className='absolute right-16 font-bold text-slate-400 ml-10'>+ $2.46</Text>
                            <View className='absolute right-4'>
                            <Feather name="check-circle" size={24} color="orange" className='ml-6' />
                            </View>
                        </View>
                        
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications