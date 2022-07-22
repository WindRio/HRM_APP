import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Common } from "../index";
import { style } from "@/constants";
import { ForgotPass } from "../../styleComponent/StyleForgotPass";
import { useAuth } from "@/hooks";
import { verifyEmail } from "@/utils/validators";

const ForgotPassword = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { ForgotState, handleForgot, handleNotify } = useAuth();
  const handlePress = () => {
    if (email && verifyEmail(email)) {
      handleForgot({ screen: "ForgotPassword", email });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setVisible(true);
    }
  };

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <LinearGradient
            colors={Common.Color.linear}
            style={ForgotPass.background}
          >
            <>
              <Common.LoadingModal
                loader={loading}
              />
              <Common.ModalNotification.SuccessModal
                visible={ForgotState.message ? true : false && loading}
                title={ForgotState.message}
                onPress={() => {
                  handleNotify();
                  navigation.navigate("Otp");
                }}
              />
              <Common.ModalNotification.FailModal
                visible={ForgotState.errorMessage ? true : false && loading}
                title={ForgotState.errorMessage}
                onPress={() => {
                  handleNotify();
                }}
              />
              <Common.ModalNotification.FailModal
                visible={visible}
                title={Common.Title.InputAllNotify}
                onPress={() => {
                  setVisible(false)
                }} />
              <Common.BackButton
                onPress={() => navigation.goBack()}
              />
            </>
            <Text style={ForgotPass.title1}>
              {Common.Title.FORGOT_PASS}
            </Text>
            <View style={ForgotPass.wrapText}>
              <Text style={ForgotPass.title2}>
                {Common.Title.TITTLE_FORGOT_PASS}
              </Text>
            </View>

            <View style={ForgotPass.wrapContent}>
              <Common.InputCommon
                placeholder={Common.Title.EMAIL}
                nameIconLeft={"email-outline"}
                width={style.INPUT_AUTHEN.width}
                height={style.INPUT_AUTHEN.height}
                heightInput={style.HEIGHT_INPUT.height}
                value={email}
                onChangeText={setEmail}
              />
              <Text style={{ color: "white" }}>
                {verifyEmail(email) ? "" : Common.Title.Validate_Email}
              </Text>
              <View style={ForgotPass.button}>
                <Common.ButtonCommon
                  backgroundColor={Common.Color.black}
                  width={style.BTN_CONFIRM_AUTHEN.width}
                  height={style.BTN_CONFIRM_AUTHEN.height}
                  title={Common.Title.CONFIRM}
                  onPress={() => handlePress()}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
