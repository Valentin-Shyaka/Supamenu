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

const Restaurants = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen h-screen bg-[#eceae9]'>
                   
                    <View className=' h-16 w-full bg-white top-0 p-2 border-b border-b-slate-300 z-10  '>
                        <View className=' flex flex-row '>
                            <View className='bg-[#eceae9] p-2 items-center self-center w-12 rounded-lg '>
                                <AntDesign name="left" size={24} color="orange" />
                            </View>
                            <TextInput placeholder="search..." className='align-middle h-full text-lg font-bold  text-slate-300 ml-4'></TextInput>
                        </View>
                    </View>
                    <View className=' w-full h-full p-4'>
                        <Text className=' text-orange-400 mb-4'>Nearby Restaurant</Text>

                        <View className='w-full bg-white h-20 rounded-lg'>
                        <Image
                            source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                             }}
                        />
                        </View>
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Restaurants