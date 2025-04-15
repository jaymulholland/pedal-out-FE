import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native"; // Hook for getting color scheme

// Create a component that uses color scheme to adjust icon colors
const TabIcon = ({ iconName }) => {
  const colorScheme = useColorScheme(); // Get the current color scheme (light or dark)

  // Define color choices for light and dark modes
  const iconColor = colorScheme === "dark" ? "#FFF" : "#000"; // White for dark mode, black for light mode

  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: 60 }}>
      <Ionicons name={iconName} size={30} color={iconColor} />
    </View>
  );
};

export default TabIcon;
