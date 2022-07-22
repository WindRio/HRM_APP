import React from "react";
import { View} from "react-native";
import OtpComponent from '../../components/authComponents/OtpComponent'

const OtpScreen = (props) => {
    return (
        <View>
            <OtpComponent {...props}/>
        </View>
    );
};


export default  OtpScreen;