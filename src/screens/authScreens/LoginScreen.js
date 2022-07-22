import React from "react";
import { View} from "react-native";
import LoginComponent from '../../components/authComponents/LoginComponent'

const Login = (props) => {
    return (
        <View>
            <LoginComponent {...props}/>
        </View>
    );
};


export default  Login;