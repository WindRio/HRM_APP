import { StyleSheet } from "react-native";

export const ChangePasswordStyle = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },
    font: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: '#FFFFFF',
    },
    background: {
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%'
    },
    header: {
        height: '25%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: '15%',
    },
    iconBack: {
        width: 70,
        height: 35,
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 35,
        color: '#FFFFFF',
    },
    title: {
        width: 300,
        height: 42,
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 42,
        marginTop: '20%'
    },
    smallTitle: {
        width: 300,
        height: 42,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        marginTop: '8%',
        paddingLeft: '2%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '35%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%',
    },
    valid: {
        position: 'relative',
    },
    text: {
        position: 'absolute',
        color: 'black',
        left: '13%',
        bottom: '-45%',
    },
    footer: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginBottom: '35%',
    },
    margin5: {
        marginBottom: '10%',
    }
});

