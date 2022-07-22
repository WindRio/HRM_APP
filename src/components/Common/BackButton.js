import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

export const BackButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
    >
      <Icon name="arrow-left" color="#FFFFFF" size={26}></Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignSelf: "flex-start",
  },
});