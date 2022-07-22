import React from 'react'
import { Button, View } from 'react-native'
import { useAuth } from '@/hooks';

export default function HomeScreen() {
    const {
        handleSignOut
    } = useAuth();
    return (
        <View flex={1} backgroundColor='#eee'>
            <Button
                title='Log Out'
                onPress={() => handleSignOut()}
            />
        </View>
    )
}

