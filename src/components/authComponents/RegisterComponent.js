import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { Validators } from '@/utils';
import * as Common from '../Common';
import { style } from "@/constants";
import { RegisterStyle } from '../../styleComponent/RegisterStyle';

export default function RegisterComponent(props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [introCode, setIntroCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { navigation } = props;
    const {
        RegisterState,
        handleRegister,
        handleNotify,
    } = useAuth();
    const verifyEmail = Validators.verifyEmail(email)
    const verifyPassword = Validators.verifyPassword(password)
    const verifyPhone = Validators.verifyPhone(phone)
    const handlePress = () => {
        if (fullName && email && password && confirmPassword && phone && introCode && verifyPhone && verifyEmail && verifyPassword) {
            handleRegister({ screen: "Register", fullName, email, password, phone, introCode })
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        } else {
            setVisible(true)
        }
    }
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setScroll(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            console.log('2')
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
            enableResetScrollToCoords={true}
            enableOnAndroid={true}
            contentContainerStyle={{ backgroundColor: '#EE2C2C' }}
            scrollEnabled={scroll}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={RegisterStyle.screen}>
                    <LinearGradient colors={Common.Color.linear}
                        style={RegisterStyle.background}
                    >
                        <>
                            <Common.LoadingModal
                                loader={loading}
                            />
                            <Common.ModalNotification.SuccessModal
                                visible={RegisterState.message ? true : false && loading === false}
                                title={RegisterState.message}
                                onPress={() => {
                                    navigation.navigate('Otp')
                                    handleNotify()
                                }}
                            />
                            <Common.ModalNotification.FailModal
                                visible={(RegisterState.errorMessage ? true : false && loading === false)}
                                title={RegisterState.errorMessage}
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
                        <View style={RegisterStyle.header}>
                            <Common.BackButton
                                onPress={() => { navigation.goBack() }}
                            />
                            <Text style={[RegisterStyle.title, RegisterStyle.font]}>
                                {Common.Title.CREATE_ACC}
                            </Text>
                        </View>
                        <View style={RegisterStyle.container}>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"account-outline"}
                                    placeholder={Common.Title.NAME}
                                    value={fullName}
                                    onChangeText={setFullName} />
                            </View>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"email-outline"}
                                    placeholder={Common.Title.EMAIL}
                                    value={email}
                                    onChangeText={setEmail} />
                                <Text style={RegisterStyle.text}>{verifyEmail === true ? '' : Common.Title.Validate_Email}</Text>
                            </View>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"lock-outline"}
                                    placeholder={Common.Title.PASSWORD}
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={setPassword} />
                                <Text style={RegisterStyle.text}>{verifyPassword === true ? '' : Common.Title.Validate_Password}</Text>
                            </View>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"lock-outline"}
                                    placeholder={Common.Title.CONFIRM_PASS}
                                    secureTextEntry={true}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword} />
                                <Text style={RegisterStyle.text}>{(password !== confirmPassword && confirmPassword !== '') ? Common.Title.Confirm_Password : ''}</Text>
                            </View>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"phone"}
                                    placeholder={Common.Title.SDT}
                                    value={phone}
                                    keyboardType={'numeric'}
                                    onChangeText={setPhone} />
                                <Text style={RegisterStyle.text}>{verifyPhone === true ? '' : Common.Title.Validate_Phone}</Text>
                            </View>
                            <View style={[RegisterStyle.valid, RegisterStyle.input]}>
                                <Common.InputCommon
                                    nameIconLeft={"qrcode"}
                                    placeholder={Common.Title.CODE}
                                    value={introCode}
                                    onChangeText={setIntroCode} />
                            </View>
                        </View>
                        <View style={RegisterStyle.footer}>
                            <View style={RegisterStyle.btn}>
                                <Common.ButtonCommon
                                    backgroundColor={Common.Color.black}
                                    height={'100%'}
                                    iconName={"arrow-right"}
                                    iconRight={true}
                                    title={Common.Title.REGISTER_BUTTON}
                                    onPress={() => handlePress()}
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}
