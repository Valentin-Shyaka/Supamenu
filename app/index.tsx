import {Text,ScrollView,SafeAreaView,View,TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import {store} from '../store/index'
import { Provider } from "react-redux";
const App = () => {
    return (
        <Provider store={store} >
            <SafeAreaView>
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
        </Provider>
    )
}

export default App