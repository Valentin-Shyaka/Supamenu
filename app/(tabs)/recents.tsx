import {Text,SafeAreaView,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Recents = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen h-screen p-6  bg-[#ffffff]'>
                    <View className=' h-20  flex justify-between flex-row items-center'>
                        <FontAwesome6 name="bars-staggered" size={24} color="black" />
                        <FontAwesome5 name="user-circle" size={32} color="black" />

                    </View>
                    <Text className='text-2xl font-bold mt-2'>Let's order</Text>
                    <Text className='font-light text-2xl'>Nutritious food</Text>

                    <View className='w-full h-14 mt-2 bg-slate-200 rounded-md flex flex-row items-center'>
                        
                    </View>
                    
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Recents