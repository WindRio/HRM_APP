import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";

export const RegisterStyle = StyleSheet.create({
    screen: {
        height: hp('110%'),
        width: wp('100%'),
    },
    font: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: '#FFFFFF',
    },
    background: {
        height: hp('100%'),
        width: wp('100%'),
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%',
    },
    header: {
        height: hp('15%'),
        width: wp('85%'),
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: '5%'
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
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: hp('65%'),
        width: wp('100%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '5%',
    },
    valid: {
        position: 'relative',
    },
    input: {
        width: wp('85%'),
        height: hp('5%'),
    },
    text: {
        position: 'absolute',
        color: 'black',
        left: '13%',
        bottom: '-95%',
    },
    footer: {
        height: '15%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    btn: {
        marginRight: '5%',
        marginBottom: '10%',
        width: wp('36%'),
        height: hp('5.5%'),
    }
});

