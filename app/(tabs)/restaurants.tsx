import {Text,ScrollView,View,Pressable, TextInput, Image} from "react-native"
import { Link } from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
  import image from '../../images/download.jpeg'
  import image2 from '../../images/filini.jpeg'
  import image3 from '../../images/download.jpeg'

  const restaurants=[
    {
        image: image,
        id:1,
        name:"Pili Pili (Rwanda)",
        type:"World,African,Pizzeria,Coffee"
    },
    {
        image: image2,
        id:2,
        name:"Filini (Raddisson)",
        type:"World,African,Pizzeria,Coffee"
    },
    {
        image: image3,
        id:1,
        name:"La Creola (Kimihurura)",
        type:"World,African,Pizzeria,Coffee"
    }
  ]
const Restaurants = () => {
    const navigate=useNavigation()
    const handlePress=()=>{
       
        navigate.navigate('notifications')
    }
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

                       {restaurants.map((resto,index)=>(
                            <Pressable onPress={handlePress} className='w-full bg-white h-20 rounded-lg flex flex-row p-2 mb-4' key={index}>
                                <View className='h-full w-20 rounded-md'>
                                    <Image source={resto.image} alt="" className="h-full w-full rounded-md" />
                                </View>
                                <View className='justify-center text-center ml-4'>
                                    <Text className=' text-md font-bold '>{resto.name}</Text>
                                    <Text className='text-slate-400 text-sm font-bold '>{resto.type} </Text>
                                </View>
                                <AntDesign name="staro" size={20} color="orange" />
                            </Pressable>
                       ))

                       }    
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Restaurants