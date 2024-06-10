import {Text,Button,SafeAreaView,ScrollView,DrawerLayoutAndroid,View, TextInput, Pressable} from "react-native"
import { Link } from "expo-router"
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import image from '../../images/burger.jpg'
import image2 from '../../images/pizza.jpg'
import image3 from '../../images/banjo.jpg'
import { Image } from "react-native";
import { FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRef,useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppServices from '../../services'
   

const Recents = () => {
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const user= AppServices.getCurrentUser()

   

    const navigationView = () => (
        <View >
          <Text >I'm in the Drawer!</Text>
          <Button
            title="Close drawer"
            onPress={() => drawer.current?.closeDrawer()}
          />
        </View>
    )
    return (
        <SafeAreaView className=''>
            <ScrollView>
            

                <View className='w-screen p-4  bg-[#ffffff]'>

                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                   
                    drawerBackgroundColor={'black'}
                    drawerPosition={'left'}
                    renderNavigationView={navigationView}
                    >
                
                </DrawerLayoutAndroid>

                    <View className=' h-20  flex justify-between flex-row items-center'>
                        <FontAwesome6 name="bars-staggered" size={24} color="black" onPress={() =>drawer.current?.openDrawer()} />
                        <Text className='font-bold text-lg'>Hello <Text className='font-light text-orange-600'>@{ "@lantern"}</Text> </Text>
                        <FontAwesome5 name="user-circle" size={32} color="black" />

                    </View>
                    <Text className='text-2xl font-bold '>Let's order</Text>
                    <Text className='font-extralight text-2xl'>Nutritious food</Text>

                    <View className=' relative w-full h-14 mt-2 bg-slate-200 rounded-md flex flex-row items-center p-2'>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput placeholder="search..." className='h-full w-[65%] text-lg ml-4 '></TextInput>
                        <View className='absolute right-4 border-l border-slate-300 p-2'>
                            <AntDesign name="bars" size={24} color="orange" /> 
                        </View>
                    </View>
                    <View className='flex flex-row w-full overflow-scroll mt-2 justify-between'>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        
                        <View className='p-2 flex flex-row bg-[#f2893e] rounded-md justify-center items-center mr-2'>
                            <Ionicons name="fast-food-outline" size={24} color="white" />
                            <Text className='font-bold text-white ml-2'>Foods</Text>
                        </View>
                        <View className='p-2 flex flex-row bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                        <Entypo name="drink" size={24} color="green" />
                            <Text className='font-bold text-black'>Juices</Text>
                        </View>
                        <View className='p-2 flex flex-row bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                        <MaterialCommunityIcons name="fruit-watermelon" size={24} color="red" />
                            <Text className='font-bold text-black'>Fruits</Text>
                        </View>
                        <View className='p-2 flex flex-row bg-[#f23e3e3e] rounded-md justify-center items-center mr-2'>
                        <MaterialCommunityIcons name="fruit-cherries" size={24} color="green" />
                            <Text className='font-bold text-black'>Vegies</Text>
                        </View>
                        
                        
                    </ScrollView>

                    </View>
                    <View className=' relative mt-4'>
                        <Image source={image} alt="" className="h-52 w-full rounded-t-md rounded-lg " />
                        <View className='absolute justify-center p-6 bg-black h-full w-full opacity-80 rounded-lg'>
                            <Text className='text-xl font-bold text-white'>For <Text className='text-orange-600'>PRIDE</Text> month</Text>
                            <Text className='text-xl font-bold text-white'>Discount up to  <Text className='text-orange-600'>35%</Text></Text>
                            <Pressable className='bg-orange-600 w-40 rounded-lg p-2 mt-4'>
                                <Text className='text-center font-bold text-white'>Explore</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className='mt-4 flex flex-row justify-between items-center'>
                        <Text className='font-bold text-lg'>Reccomended products</Text>
                        <Text className='text-orange-400 font-bold '>see all</Text>
                    </View>
                    
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="gap-x-2 py-4">
                            <View className='relative bg-white w-40 mb-1 p-4 h-[210px] shadow-sm shadow-black rounded-md'>
                                <Image source={image} alt="" className="h-32 w-full rounded-t-md" />
                                <Text className='text-sm mt-2 ml-2 font-bold '>cheese Burger</Text>
                                <Text className='absolute text-orange-400 font-bold  right-2 bottom-1'>$6.99</Text>

                            </View>
                            <View className='relative bg-white w-40 mb-1 p-4 h-[210px] shadow-sm shadow-black rounded-md'>
                                <Image source={image2} alt="" className="h-32 w-full rounded-t-md" />
                                <Text className='text-sm mt-2 ml-2 font-bold '>cheese Burger</Text>
                                <Text className='absolute text-orange-400 font-bold  right-2 bottom-1'>$6.99</Text>

                            </View>
                            <View className='relative bg-white w-40 mb-1 p-4 h-[210px] shadow-sm shadow-black rounded-md'>
                                <Image source={image2} alt="" className="h-32 w-full rounded-t-md" />
                                <Text className='text-sm mt-2 ml-2 font-bold '>cheese Burger</Text>
                                <Text className='absolute text-orange-400 font-bold  right-2 bottom-1'>$6.99</Text>

                            </View>
                        </ScrollView>
                        <View className='mt-2'>
                            <Text className='text-lg font-bold '>Most Popular Food </Text>

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className='flex flex-row w-full mt-2 gap-x-2 py-4 '>
                                <View>
                                    <View className=' p-2 mb-1 w-20 h-20 bg-white shadow-sm shadow-black rounded-full'>
                                        <Image source={image3} alt="" className="h-full w-full rounded-full" />
                                    </View>
                                    <Text className='text-center font-bold text-slate-500'>Pizza</Text>
                                </View>
                                <View>
                                <View className=' p-2 mb-1 w-20 h-20 bg-white shadow-sm shadow-black rounded-full'>
                                    <Image source={image3} alt="" className="h-full w-full rounded-full" />
                                </View>
                                <Text className='text-center font-bold text-slate-500'>Cakes</Text>
                                </View>
                                <View>
                                <View className=' p-2 mb-1 w-20 h-20 bg-white shadow-sm shadow-black rounded-full'>
                                    <Image source={image3} alt="" className="h-full w-full rounded-full" />
                                </View>
                                <Text className='text-center font-bold text-slate-500'>Meats</Text>
                                </View>
                                <View>
                                <View className=' p-2 mb-1 w-20 h-20 bg-white shadow-sm shadow-black rounded-full'>
                                    <Image source={image3} alt="" className="h-full w-full rounded-full" />
                                </View>
                                <Text className='text-center font-bold text-slate-500'>Pizza</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View className='mt-2 '>
                            <Text className='text-lg font-bold '>Delivering</Text>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className='flex flex-row w-full h-40 mt-2 gap-x-2 py-4 '>
                                <View className='relative shadow-sm shadow-black'>
                                    <Image source={image2} alt="" className="h-32 w-32 rounded-md" />
                                    <View className='absolute h-full w-full rounded-md'>
                                        <View className=' absolute right-2 top-2 bg-[#ffffff] h-6 w-16 rounded-sm '>
                                            <Text className='font-bold text-center'>In stock</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className='relative shadow-sm shadow-black'>
                                    <Image source={image} alt="" className="h-32 w-32 rounded-md" />
                                    <View className='absolute h-full w-full rounded-md'>
                                        <View className=' absolute right-2 top-2 bg-[#ffffff] h-6 w-16 rounded-sm '>
                                            <Text className='font-bold text-center'>In stock</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className='relative shadow-sm shadow-black'>
                                    <Image source={image3} alt="" className="h-32 w-32 rounded-md" />
                                    <View className='absolute h-full w-full rounded-md'>
                                        <View className=' absolute right-2 top-2 bg-[#ffffff] h-6 w-16 rounded-sm '>
                                            <Text className='font-bold text-center'>In stock</Text>
                                        </View>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>

                    </View>

                   
                   
                    
                
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default Recents