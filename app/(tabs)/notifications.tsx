import {Text,SafeAreaView,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"

const Notifications = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
               

                <View className='w-screen h-screen justify-center  bg-[#e38a3d]'>
                    <TouchableOpacity>
                    <Text className='text-center text-4xl text-white font-bold'>Notifications</Text>
                    </TouchableOpacity>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications