import {Text,SafeAreaView,ScrollView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"

const App = () => {
    return (
        <SafeAreaView className=''>
            <ScrollView>
                <Link href={'/login'}>

                <View className='w-screen h-screen justify-center  bg-[#e38a3d]'>
                    <TouchableOpacity>
                    <Text className='text-center text-4xl text-white font-bold'><Text className='text-black'>SUPA</Text>MENU</Text>
                    </TouchableOpacity>
                </View>
                </Link>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App