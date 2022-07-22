import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export const InputCommon = (props) => {
  const { onChangeText, value, placeholder,
    secureTextEntry, heightInput, nameIconLeft,
    width, height, keyboardType } = props;
  const [hidePassword, setHidePassword] = React.useState(secureTextEntry)
  return (
    <View style={styles.wrapInput} width={width} height={height}>
      <TextInput
        style={styles.input}
        height={heightInput}
        label={placeholder}
        secureTextEntry={hidePassword}
        keyboardType={keyboardType}
        left={<TextInput.Icon name={nameIconLeft} />}
        right={
          secureTextEntry ?
            <TextInput.Icon name={hidePassword ? 'eye-off' : 'eye'}
              onPress={() => { setHidePassword(!hidePassword) }} /> : null
        }
        mode="flat"
        theme={{ colors: { text: 'black', primary: ['#ABABAB', 'transparent'] } }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "white",
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
    backgroundColor: "#fff",
    fontSize: 16
  },
});
