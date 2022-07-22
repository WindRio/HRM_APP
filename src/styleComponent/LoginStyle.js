import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters'

export const LoginStyle = ScaledSheet.create({
  screen: {
    height: hp('100%'),
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
    height: hp('25%'),
    width: wp('85%'),
    alignItems: 'flex-start',
    marginTop: '15%',
  },
  bigTitle: {
    marginTop: '20%',
    marginBottom: '10%',
    fontSize: '34@s',
    fontWeight: "700",
  },
  smallTitle: {
    fontSize: '16@s',
    fontWeight: "400",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: hp('35%'),
    width: wp('100%'),
    justifyContent: 'space-between',
    position: 'relative',
    paddingTop: '3%'
  },
  container_input: {
    width: wp('100%'),
    height: hp('20%'),
    justifyContent: 'space-around',
    alignItems: 'center',
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
  btn: {
    width: wp('40%'),
    height: hp('6%'),
    position: 'absolute',
    right: '7.5%',
    bottom: '5%'
  },
  footer: {
    height: hp('25%'),
    width: wp('100%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '5%'
  },
  footerText: {
    fontWeight: '400',
    fontSize: '13@s',
    lineHeight: '16@s',
    textDecorationLine: 'underline',
  },
  verticalLine: {
    fontWeight: '400',
    fontSize: '14@s',
    lineHeight: '16@s',
  },
  marginTop_5: {
    marginTop: '5%'
  }
})
