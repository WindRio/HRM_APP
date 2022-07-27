import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from 'react';
import { useAuth } from '@/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { Validators } from '@/utils';
import * as Common from '../Common';
import { style } from "@/constants";
import { ChangePasswordStyle } from '../../styleComponent/ChangePasswordStyle';

export default function ChangePassComponent(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { navigation } = props;
    const {
        AuthenStore,
        handleChangePassword,
        handleNotify
    } = useAuth();
    const verifyPassword = Validators.verifyPassword(password)
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={ChangePasswordStyle.screen}>
                    <LinearGradient colors={Common.Color.linear}
                        style={ChangePasswordStyle.background}
                    >
                        <Common.LoadingModal
                            loader={loading}
                        />
                        <Common.ModalNotification.SuccessModal
                            visible={AuthenStore.message ? true : false && loading === false}
                            title={AuthenStore.message}
                            onPress={() => {
                                navigation.navigate('Login')
                                handleNotify()
                            }}
                        />
                        <Common.ModalNotification.FailModal
                            visible={(AuthenStore.errorMessage ? true : false && loading === false)}
                            title={AuthenStore.errorMessage}
                            onPress={() => {
                                handleNotify()
                            }} />
                        <View style={ChangePasswordStyle.header}>
                            <Common.BackButton
                                onPress={() => { navigation.navigate("ForgotPassword") }}
                            />
                            <Text style={[ChangePasswordStyle.title, ChangePasswordStyle.font]}>
                                {Common.Title.RESET_PASS}
                            </Text>
                            <Text style={[ChangePasswordStyle.smallTitle, ChangePasswordStyle.font]}>
                                {Common.Title.TITTLE_RESET}
                            </Text>
                        </View>
                        <View style={ChangePasswordStyle.container}>
                            <View style={[ChangePasswordStyle.valid]}>
                                <Common.InputCommon
                                    nameIconLeft={"lock-outline"}
                                    width={style.INPUT_AUTHEN.width}
                                    height={style.INPUT_AUTHEN.height}
                                    heightInput={style.HEIGHT_INPUT.height}
                                    placeholder={Common.Title.NEW_PASS}
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={setPassword} />
                                <Text style={ChangePasswordStyle.text}>{verifyPassword === true ? '' : 'Password isValid'}</Text>
                            </View>
                            <View style={[ChangePasswordStyle.valid, ChangePasswordStyle.margin5]}>
                                <Common.InputCommon
                                    nameIconLeft={"lock-outline"}
                                    width={style.INPUT_AUTHEN.width}
                                    height={style.INPUT_AUTHEN.height}
                                    heightInput={style.HEIGHT_INPUT.height}
                                    placeholder={Common.Title.NEW_PASS_AGAIN}
                                    secureTextEntry={true}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword} />
                                <Text style={RegisterStyle.text}>{(password !== confirmPassword && confirmPassword !== '') ? 'Password do not match' : ''}</Text>
                            </View>
                        </View>
                        <View style={ChangePasswordStyle.footer}>
                            <View style={ChangePasswordStyle.btn}>
                                <Common.ButtonCommon
                                    backgroundColor={Common.Color.black}
                                    width={style.BTN_CONFIRM.width}
                                    height={style.BTN_CONFIRM.height}
                                    title={Common.Title.CONFIRM}
                                    onPress={() => {
                                        handleChangePassword({ password })
                                        setLoading(true);
                                        setTimeout(() => {
                                            setLoading(false);
                                        }, 3000);
                                    }}
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
