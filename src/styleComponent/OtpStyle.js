import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters'

export const OtpStyle = ScaledSheet.create({
    body: {
        width: wp('100%'),
        height: hp('100%')
    },
    title: {
        padding: '5%',
        paddingTop:'20%',
    },
    backButton: {

    },
    textTitle: {
        fontSize: 36,
        color: 'white',
        paddingTop:'20%',
        fontWeight:'700',
        // fontFamily:'Roboto'
    },
    otpBox: {
        backgroundColor: "white",
        marginTop: '10%',
        width: 45,
        height: 45,
        textAlign: "center",
        fontSize:20
    },
    inputOtp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    setTime: {
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        padding: '10%',
        alignItems:'center'
    },
    confirm: {
        height: '100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    setTimeText: {
        fontSize: 20,
        color: 'white',
        paddingTop:'10%'
    },
    textSend:{
        fontSize: 20,
        fontWeight:'700',
        color: 'white',
        textDecorationLine: 'underline'
    },

})
