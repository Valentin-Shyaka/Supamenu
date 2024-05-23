import {Text,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { Image } from "react-native"
import image from '../../images/burger.jpg'
import { SafeAreaView } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

const Cart = () => {
    return (
        <SafeAreaView >
            <ScrollView contentContainerStyle={{height:'100%'}} >
                    <Image source={image} alt="" className=" w-full  h-52" />
                    <View className='absolute h-[75vh] top-48 w-full rounded-t-2xl bg-white p-4  '>
                        <View className='flex flex-row justify-between'>
                        <Text className='font-bold text-xl'>Cheese burger</Text>
                        <Text className='text-2xl font-bold text-orange-600'>$4.96 </Text>
                        </View>
                        <Text className='text-center mt-2 font-bold text-2xl underline'>Details</Text>

                        <View className='p-6 mt-2  gap-y-4'>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Weight</Text>
                                <Text>200g</Text>
                            </View>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Payment code</Text>
                                <Text>200g</Text>
                            </View>
                            <View className='flex flex-row justify-between' >
                                <Text className='font-bold'>Delivery time</Text>
                                <Text>200g</Text>
                            </View>
                        </View>
                        <Text className='text-xl font-bold '>Payment options</Text>
                        <View className='flex flex-row justify-between '>
                            <FontAwesome name="bitcoin" size={24} color="black" />  
                            
                        </View>
                        
                      
                    </View> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Cart