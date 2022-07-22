import React from "react";
import { Modal, View, ActivityIndicator, StyleSheet } from "react-native"

export const LoadingModal = (props) => {
  const { loader } = props
  return (
    <Modal transparent animationType={"none"} visible={loader}>
      <View
        style={[
          styles.modalBackground,
          { backgroundColor: "rgba(0,0,0,0.5)" },
        ]}
      >
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loader}
            color="#000000"
            size="large"
          ></ActivityIndicator>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})