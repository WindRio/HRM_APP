import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '@/screens/authScreens'
const Stack = createNativeStackNavigator()

export default function AuthScreens() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            {AuthScreen.map(screen => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                />
            ))}
        </Stack.Navigator>
    )
}



