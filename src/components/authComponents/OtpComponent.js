import React, { useState, useEffect, useRef } from "react";
import { style } from "@/constants";
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Common } from "..";
import { OtpStyle } from "../../styleComponent/OtpStyle";
import { useAuth } from '@/hooks';

const OtpComponent = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const firstTouch = useRef();
  const secondTouch = useRef();
  const thirdTouch = useRef();
  const fourthTouch = useRef();
  const fifthTouch = useRef();
  const sixthTouch = useRef();
  const [otp, setOtp] = useState('');
  var clockCall = null
  const [visible, setVisible] = useState(false);
  const deleteHandle = (nativeEvent, numb) => {
    if (nativeEvent.key === 'Backspace') {
      switch (numb) {
        case 'two': {
          !(otp.two) ? firstTouch.current.focus() && otp.one === ''
            : secondTouch.current.focus()
          break
        }
        case 'three': {
          !(otp.three) ? secondTouch.current.focus() && otp.two === ''
            : thirdTouch.current.focus()
          break
        }
        case 'four': {
          !(otp.four) ? thirdTouch.current.focus() && otp.three === ''
            : fourthTouch.current.focus()
          break
        }
        case 'five': {
          !(otp.five) ? fourthTouch.current.focus() && otp.four === ''
            : fifthTouch.current.focus()
          break
        }
        case 'six': {
          !(otp.six) ? fifthTouch.current.focus() && otp.five === ''
            : sixthTouch.current.focus()
          break
        }
        default: {
          break
        }
      }
    }
  }
  const {
    OtpState,
    ForgotState,
    RegisterState,
    LoginState,
    handleOtp,
    handleNotify
  } = useAuth()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (LoginState.timeOtp || ForgotState.timeOtp || RegisterState.timeOtp) {
      setCountdown(LoginState.timeOtp || ForgotState.timeOtp || RegisterState.timeOtp)
    }
  }, [])
  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });
  const decrementClock = () => {
    if (countdown === 0) {
      clearInterval(clockCall)
    } else {
      setCountdown(countdown - 1)
    }
  }
  const resendOTP = () => {
    handleOtp()
  }
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <LinearGradient
            colors={Common.Color.linear}
            style={OtpStyle.body}
          >
            <>
              <Common.LoadingModal
                loader={loading}
              />
              <Common.TimeLockModal visible={OtpState.timeLock ? true : false && loading === false} time={OtpState.timeLock} />
              <Common.ModalNotification.SuccessModal
                visible={OtpState.message ? true : false && loading === false}
                title={OtpState.message}
                onPress={() => {
                  OtpState.resend ? handleNotify() :
                    handleNotify()
                  navigation.navigate('Login')
                }}
              />
              <Common.ModalNotification.FailModal
                visible={(OtpState.errorMessage ? true : false && loading === false)}
                title={OtpState.errorMessage}
                onPress={() => {
                  handleNotify()
                }} />
              <Common.ModalNotification.FailModal
                visible={visible}
                title={'Ban chua nhap du ma OTP'}
                onPress={() => {
                  setVisible(false)
                }} />
            </>
            <View style={OtpStyle.title}>
              <Common.BackButton
                onPress={() => { navigation.goBack() }}
              />
              <Text style={OtpStyle.textTitle}>
                {Common.Title.OTP}
              </Text>
            </View>
            <View style={OtpStyle.inputOtp}>
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={firstTouch}
                value={otp.one}
                autoCorrect={true}
                onChangeText={(text) => {
                  setOtp({ ...otp, one: text });
                  text && secondTouch.current.focus();
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={secondTouch}
                value={otp.two}
                onChangeText={(text) => {
                  setOtp({ ...otp, two: text });
                  text
                    ? thirdTouch.current.focus()
                    : firstTouch.current.focus();
                }}
                onKeyPress={({ nativeEvent }) => {
                  deleteHandle(nativeEvent, 'two')
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={thirdTouch}
                value={otp.three}
                onChangeText={(text) => {
                  setOtp({ ...otp, three: text });
                  text
                    ? fourthTouch.current.focus()
                    : secondTouch.current.focus();
                }}
                onKeyPress={({ nativeEvent }) => {
                  deleteHandle(nativeEvent, 'three')
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={fourthTouch}
                value={otp.four}
                onChangeText={(text) => {
                  setOtp({ ...otp, four: text });
                  text
                    ? fifthTouch.current.focus()
                    : thirdTouch.current.focus();
                }}
                onKeyPress={({ nativeEvent }) => {
                  deleteHandle(nativeEvent, 'four')
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={fifthTouch}
                value={otp.five}
                onChangeText={(text) => {
                  setOtp({ ...otp, five: text });
                  text
                    ? sixthTouch.current.focus()
                    : fourthTouch.current.focus();
                }}
                onKeyPress={({ nativeEvent }) => {
                  deleteHandle(nativeEvent, 'five')
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
              <TextInput
                style={OtpStyle.otpBox}
                maxLength={1}
                keyboardType="numeric"
                ref={sixthTouch}
                value={otp.six}
                onChangeText={(text) => {
                  setOtp({ ...otp, six: text });
                  !text && fifthTouch.current.focus();
                }}
                onKeyPress={({ nativeEvent }) => {
                  deleteHandle(nativeEvent, 'six')
                }}
                selectTextOnFocus={Platform.select({
                  ios: true,
                  android: true,
                })}
              />
            </View>
            <View style={OtpStyle.setTime}>{
              countdown !== 0 ?
                <Text style={OtpStyle.setTimeText}>Mã OTP sẽ hết hạn sau {countdown} giây</Text>
                :
                <Text style={OtpStyle.textSend} onPress={() => { resendOTP() }}>Gửi Lại</Text>
            }</View>
            <View style={OtpStyle.confirm}>
              <Common.ButtonCommon
                backgroundColor={Common.Color.black}
                width={style.BTN_CONFIRM.width}
                height={style.BTN_CONFIRM.height}
                title={Common.Title.CONFIRM}
                onPress={() => {
                  if (otp.one && otp.two && otp.three && otp.four && otp.five && otp.six) {
                    setLoading(true)
                    setTimeout(() => {
                      setLoading(false);
                      handleOtp(otp);
                    }, 1000);
                  } else {
                    setVisible(true)
                  }
                }}
              ></Common.ButtonCommon>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
};
export default OtpComponent;

