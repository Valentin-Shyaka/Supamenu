import {Text,SafeAreaView,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { Image } from "react-native"
import image from '../../images/menu.jpg'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Notifications = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen h-screen  bg-[#f1efed]'>
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
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications