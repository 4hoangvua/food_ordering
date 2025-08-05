import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";
import cn from "clsx";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => {
  return (
    <View
      className="justify-center items-center"
      style={{ gap: 4, height: 80, width: 80, marginTop: 40 }}>
      <Image
        source={icon}
        className="w-7 h-7"
        resizeMode="contain"
        tintColor={focused ? "#FEBC00" : "#5D5F6D"}
      />
      <Text
        className={cn("text-sm", focused ? "text-primary font-bold" : "text-gray-400 font-medium")}>
        {title}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Redirect href={"/sign-in"} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 20,
          height: 80,
          position: "absolute",
          bottom: 40,
          backgroundColor: "white",
          shadowColor: "#1a1a1a",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" focused={focused} icon={images.google} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Search" focused={focused} icon={images.google} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Cart" focused={focused} icon={images.google} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Profile" focused={focused} icon={images.google} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
