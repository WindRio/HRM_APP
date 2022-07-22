import React from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const ButtonCommon = (props) => {
  const { title, onPress, backgroundColor, width, height, disabled, iconName, iconRight } = props;
  return (
    <Pressable
      width={width}
      height={height}
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Button
        mode="contained"
        dark={true}
        color={backgroundColor}
        icon={iconName}
        contentStyle={iconRight ? { flexDirection: 'row-reverse' } : null}
        disabled={disabled}
        labelStyle={styles.textStyle}
      >
        {title}
      </Button>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "black",
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 18,
    fontWeight: "400",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
  },
});
