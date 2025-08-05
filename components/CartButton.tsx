import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 10;
  return (
    <TouchableOpacity
      className="bg-black size-10 rounded-full relative flex items-center justify-center"
      onPress={() => {}}>
      <Image source={images.google} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="absolute  bg-primary rounded-full bottom-6 left-7">
          <Text className="text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
