import {Text,SafeAreaView,ScrollView,View,TouchableOpacity, TextInput} from "react-native"
import { Link } from "expo-router"
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import image from '../../images/burger.jpg'
import { Image } from "react-native";

const Recents = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen p-6  bg-[#ffffff]'>
                    <View className=' h-20  flex justify-between flex-row items-center'>
                        <FontAwesome6 name="bars-staggered" size={24} color="black" />
                        <FontAwesome5 name="user-circle" size={32} color="black" />

                    </View>
                    <Text className='text-2xl font-bold '>Let's order</Text>
                    <Text className='font-light text-2xl'>Nutritious food</Text>

                    <View className=' relative w-full h-14 mt-2 bg-slate-200 rounded-md flex flex-row items-center p-2'>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput placeholder="search..." className='h-full w-[65%] text-lg ml-4 '></TextInput>
                        <View className='absolute right-4 border-l border-slate-300 p-2'>
                            <AntDesign name="bars" size={24} color="orange" /> 
                        </View>
                    </View>
                    <View className='flex flex-row w-full overflow-scroll mt-2 justify-between'>

                    <ScrollView horizontal={true} >
                        
                        <View className='w-20 h-10 bg-[#f2893e] rounded-md justify-center items-center mr-2'>
                            <Text className='font-bold text-white'>Foods</Text>
                        </View>
                        <View className='w-20 h-10 bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                            <Text className='font-bold text-black'>Juices</Text>
                        </View>
                        <View className='w-20 h-10 bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                            <Text className='font-bold text-black'>Fruits</Text>
                        </View>
                        <View className='w-20 h-10 bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                            <Text className='font-bold text-black'>Vegies</Text>
                        </View>
                        
                        
                    </ScrollView>

                    </View>

                    <View className='mt-4 flex flex-row justify-between items-center'>
                        <Text className='font-bold text-lg'>Reccomended products</Text>
                        <Text className='text-orange-400 font-bold '>see all</Text>
                    </View>
                    
                        <ScrollView horizontal={true} className="gap-x-2 py-4">
                        <View className='relative bg-white w-40 mb-1 p-4 h-[210px] shadow-sm shadow-black rounded-md'>
                                <Image source={image} alt="" className="h-32 w-full rounded-t-md" />
                                <Text className='text-sm mt-2 ml-2 font-bold '>cheese Burger</Text>
                                <Text className='absolute text-orange-400 font-bold  right-2 bottom-1'>$6.99</Text>

                            </View>
                            <View className='relative bg-white w-40 mb-1 p-4 h-[210px] shadow-sm shadow-black rounded-md'>
                                <Image source={image} alt="" className="h-32 w-full rounded-t-md" />
                                <Text className='text-sm mt-2 ml-2 font-bold '>cheese Burger</Text>
                                <Text className='absolute text-orange-400 font-bold  right-2 bottom-1'>$6.99</Text>

                            </View>
                        </ScrollView>

                    </View>
                    
                
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Recents