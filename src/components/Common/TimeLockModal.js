import React from 'react'
import CountDown from 'react-native-countdown-component';
import { Modal, Pressable, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-paper';

export default function TimeLockModal({ onPress, visible, time }) {
    const [showModal, setShowModal] = React.useState(visible)
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <Modal transparent animationType={"fade"} visible={showModal} onRequestClose={() => closeModal()}>
            <Pressable
                style={[styles.modalBackground, { backgroundColor: "rgba(0,0,0,0.5)" }]}
                onPress={onPress}
            >
                <View style={styles.notifyWrapper}>
                    <Text style={styles.notifyTitle}>Your email has been locked in:</Text>
                    <CountDown
                        size={20}
                        until={60 * 15}
                        onFinish={() => alert('Finished')}
                        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: 'black' }}
                        digitTxtStyle={{ color: 'black' }}
                        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                        separatorStyle={{ color: 'black' }}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                        style={styles.countdown}
                    />
                    <Button style={styles.buttonStyle}
                        labelStyle={styles.textStyle}
                        mode="contained"
                        color='#409eff'
                        onPress={() => closeModal()}
                    >Confirm</Button>
                </View>
            </Pressable>
        </Modal>
    )
}


const styles = ScaledSheet.create({
    modalBackground: {
        // backgroundColor: "white",
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
        alignItems: "center",
        padding: "5@s"
    },
    modalBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    notifyTitle: {
        marginVertical: "30@s",
        fontSize: "20@s",
        textAlign: "center",
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '12@s',
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 18,
        fontWeight: "400",
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "400",
    },
    countdown: {
        paddingBottom: "50@s",
    }
});