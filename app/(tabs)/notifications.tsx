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
                    <Image source={image} alt="" className=" w-full rounded-b-3xl h-52" />
                    <View className=' p-2'>
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
                        <View className='flex flex-row'>
                            <Text className='mt-2 text-bold text-xl font-bold  '><Text className='text-orange-600'>$</Text>4.56</Text>
                        </View>
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications