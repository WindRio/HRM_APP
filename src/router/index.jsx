import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screens from '@/screens'
import AuthenRouter from './authenRouter'
import { useAuth } from '@/hooks';
const Stack = createNativeStackNavigator()

export default function Screens() {
    const { RegisterState } = useAuth()
    // const token = RegisterState.token;
    const token = null;
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    token !== null && token !== undefined
                        ? (
                            <>
                                <Stack.Screen name="Home" component={screens.HomeScreen} />
                            </>
                        ) :
                        (<Stack.Screen
                            name='Authen'
                            component={AuthenRouter}
                        />)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
