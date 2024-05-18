import {Text,SafeAreaView,ScrollView,View,TouchableOpacity, TextInput} from "react-native"
import { Link } from "expo-router"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
                

                <View className='w-screen h-screen justify-center  bg-[#e38a3d]'>
                    <View className='bg-white h-10 w-[80vw] self-center rounded-2xl flex flex-row items-center justify-center'>
                        <FontAwesome name="search" size={24} color="black" />
                        <TextInput placeholder="Search for yout preffered Restaurant" className='ml-4'></TextInput>

                    </View>
                    <Text className='m-10 text-center font-bold  text-slate-500 '>OR</Text>

                    <View className='w-full items-center '>
                    <MaterialIcons name="qr-code-scanner" size={180} color="black" className=''/>
                    </View>

                    <Text className='text-slate-600 font-bold text-2xl text-center m-6'>Scan, Pay & Enjoy!</Text>
                   
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home