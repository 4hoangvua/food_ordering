import cn from "clsx";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
interface CustomButtonProps {
  onPress?: () => void;
  title?: string;
  style?: string;
  textStyle?: string;
  leftIcon?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-row justify-center">
        {isLoading ? (
          <ActivityIndicator size={"small"} color="white" />
        ) : (
          <Text className={cn("text-white-100 pragraph-semibold", textStyle)}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
