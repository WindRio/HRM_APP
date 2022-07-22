import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@/hooks';
import * as Common from '../Common';
import { verifyEmail, verifyPassword } from '@/utils/validators';
import { LoginStyle } from '../../styleComponent/LoginStyle';
import * as utils from '@/utils'
const { getStore } = utils.Storage;

export default function LoginComponents(props) {
  const {
    LoginState,
    handleNotify,
    handleValidateToken,
    handleLogin
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const { navigation } = props;
  const handlePress = () => {
    if (email && password && verifyEmail(email) && verifyPassword(password)) {
      handleLogin({ screen: "Login", email, password })
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setVisible(true)
    }
  }
  const getDataSecureStore = async () => {
    const userEmail = await getStore("Email")
    setEmail(userEmail)
    const userToken = await getStore("userToken")
    if (userToken) {
      const token = { token: userToken }
      handleValidateToken(token)
    }
  }
  useEffect(() => {
    getDataSecureStore()
    return () => {
      setEmail('')
    }
  }, [])
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={LoginStyle.screen}>
          <LinearGradient colors={Common.Color.linear}
            style={LoginStyle.background}
          >
            <>
              <Common.LoadingModal
                loader={loading}
              />
              <Common.ModalNotification.SuccessModal
                visible={LoginState.message ? true : false && loading === false}
                title={LoginState.message}
                onPress={() => {
                  handleNotify()
                  navigation.navigate("Otp")
                }}
              />
              <Common.ModalNotification.FailModal
                visible={(LoginState.errorMessage ? true : false && loading === false)}
                title={LoginState.errorMessage}
                onPress={() => {
                  handleNotify()
                }} />
              <Common.ModalNotification.FailModal
                visible={visible}
                title={Common.Title.InputAllNotify}
                onPress={() => {
                  setVisible(false)
                }} />
            </>
            <View style={LoginStyle.header}>
              <Text style={[LoginStyle.bigTitle, LoginStyle.font]}>
                {Common.Title.LOGIN}
              </Text>
              <Text style={[LoginStyle.smallTitle, LoginStyle.font]}>
                {Common.Title.PLEASE_SIGN_IN}
              </Text>
            </View>
            <View style={LoginStyle.container}>
              <View style={LoginStyle.container_input}>
                <View style={[LoginStyle.valid, LoginStyle.input]}>
                  <Common.InputCommon
                    nameIconLeft={"email-outline"}
                    placeholder={Common.Title.EMAIL}
                    value={email}
                    onChangeText={setEmail} />
                  <Text style={LoginStyle.text}>{verifyEmail(email) === true ? null : Common.Title.Validate_Email}</Text>
                </View>
                <View style={[LoginStyle.valid, LoginStyle.input, LoginStyle.marginTop_5]}>
                  <Common.InputCommon
                    nameIconLeft={"lock-outline"}
                    placeholder={Common.Title.PASSWORD}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword} />
                  <Text style={LoginStyle.text}>{verifyPassword(password) === true ? null : Common.Title.Validate_Password}</Text>
                </View>
              </View>
              <View style={LoginStyle.btn}>
                <Common.ButtonCommon
                  backgroundColor={Common.Color.black}
                  height={'100%'}
                  iconName={"arrow-right"}
                  iconRight={true}
                  title={Common.Title.LOGIN}
                  onPress={() => handlePress()}
                />
              </View>
            </View>
            <View style={LoginStyle.footer}>
              <Text style={[LoginStyle.footerText]} onPress={() => navigation.navigate('Register')}>Đăng ký tài khoản </Text>
              <Text style={LoginStyle.verticalLine}> | </Text>
              <Text style={[LoginStyle.footerText]} onPress={() => navigation.navigate('ForgotPassword')}> Quên mật khẩu </Text>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

