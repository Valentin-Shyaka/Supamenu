import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="notifications"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <FontAwesome5
                  name="hamburger"
                  size={23}
                  color={focused ? "#f7941d" : "#484848"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="restaurants"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <Ionicons
                  name="restaurant-outline"
                  size={24}
                  color={focused ? "#f7941d" : "#484848"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="recents"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <Feather
                  name="clock"
                  size={24}
                  color={focused ? "#f7941d" : "#484848"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color={focused ? "#f7941d" : "#484848"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="cardPayment"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <AntDesign
                  name="wallet"
                  size={24}
                  color={focused ? "#f7941d" : "#484848"}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default TabsLayout;









