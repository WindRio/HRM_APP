import { style } from "@/constants";
import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Image,
  Text, Pressable
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const SuccessModal = (props) => {
  const { onPress, title, visible } = props;
  return (
    <Modal transparent animationType={"fade"} visible={visible} onRequestClose={onPress}>
      <Pressable
        style={[styles.modalBackground, { backgroundColor: "rgba(0,0,0,0.5)" }]}
        onPress={onPress}
      >
        <View style={styles.notifyWrapper}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../../../assets/x.png")}
                  style={styles.xButton}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../assets/ok.png")}
              style={styles.imgNotify}
            />
          </View>
          <Text style={styles.notifyTitle}>{title}</Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export const FailModal = (props) => {
  const { onPress, title, visible } = props;
  return (
    <Modal transparent animationType={"fade"} visible={visible} onRequestClose={onPress}>
      <Pressable
        style={[styles.modalBackground, { backgroundColor: "rgba(0,0,0,0.5)" }]}
        onPress={onPress}
      >
        <View style={styles.notifyWrapper}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../../../assets/x.png")}
                  style={styles.xButton}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../assets/fail.png")}
              style={styles.imgNotify}
            />
          </View>
          <Text style={styles.notifyTitle}>{title}</Text>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modalBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    borderRadius: "10@s",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  notifyWrapper: {
    backgroundColor: "white",
    height: "300@s",
    width: "300@s",
    borderRadius: "10@s",
    justifyContent: "center",
    padding: "5@s"
  },
  header: {
    width: "100%",
    height: "80@s",
    alignItems: "flex-end",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  xButton: {
    height: "30@s",
    width: "30@s",
  },
  imgNotify: {
    height: "100@s",
    width: "100@s",
    marginVertical: "10@s",
  },
  notifyTitle: {
    marginVertical: "30@s",
    fontSize: "20@s",
    textAlign: "center",
  },
});
