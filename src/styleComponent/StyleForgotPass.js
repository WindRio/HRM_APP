import { ScaledSheet } from 'react-native-size-matters'

export const ForgotPass = ScaledSheet.create({
  background: {
    width: ' 100%',
    height: ' 100%',
    paddingLeft: '40@s',
    paddingRight: '40@s',
    paddingBottom: '40@s',
    paddingTop: '70@s',
    flexDirection: "column",
  },
  title1: {
    paddingTop: '60@s',
    paddingBottom: '40@s',
    color: "white",
    fontSize: '34@s',
    // fontFamily: "Roboto",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    color: "white",
    // fontFamily: "Roboto",
    fontSize: '16@s',
    fontWeight: "400",
  },
  wrapText: {
    paddingBottom: '55@s',
  },
  wrapContent: {
    alignItems: "center",
    flex: 1
  },
  button: {
    marginTop: '10@s',
    // width:'110%'
  }
})