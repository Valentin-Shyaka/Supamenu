import {Text,ScrollView,View,TouchableOpacity, TextInput, Image} from "react-native"
import { Link } from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  import image from '../../images/download.jpeg'
  import image2 from '../../images/filini.jpeg'
const Restaurants = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className=' w-screen bg-[#f4f3f2]'>
                   
                    <View className='fixed h-16 w-full bg-white top-0 p-2 border-b border-b-slate-300 z-10  '>
                        <View className=' flex flex-row '>
                            <View className='bg-[#eceae9] p-2 items-center self-center w-12 rounded-lg '>
                                <AntDesign name="left" size={24} color="orange" />
                            </View>
                            <TextInput placeholder="search..." className='align-middle h-full text-lg font-bold  text-slate-300 ml-4'></TextInput>
                        </View>
                    </View>
                    <View className=' w-full h-full p-4'>
                        <Text className=' text-orange-400 mb-4'>Nearby Restaurant</Text>

                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image2} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image2} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        <View className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4'>
                            <View className='h-full w-20 rounded-md'>
                                <Image source={image2} alt="" className="h-full w-full rounded-md" />
                            </View>
                            <View className='justify-center text-center ml-4'>
                                <Text className=' text-lg font-bold '>Pili Pili (Rwanda)</Text>
                                <Text className='text-slate-400 text-sm font-bold '>World,African,Pizzeria,Coffee </Text>
                            </View>
                            <AntDesign name="staro" size={20} color="orange" />
                        </View>
                        
                        
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Restaurants