import { useState, useEffect } from 'react'
import { Platform, Dimensions, AppState } from 'react-native'
import { ORIENTATION, OS } from '@/constants'

export const useDevice = () => {
    const [orientation, setOrientation] = useState(ORIENTATION.PORTRAIT);

    const window = Dimensions.get('window') // size of application's window
    const screen = Dimensions.get('screen') // size of device's screen
    const os = Platform.OS

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (appState) => {
            if (appState !== 'active') {
                return;
            }

            if (window.width > window.height) {
                setOrientation(ORIENTATION.LANDSCAPE)
            } else {
                setOrientation(ORIENTATION.PORTRAIT)
            }
            subscription.remove();
        });
    }, []);

    return {
        AppState,
        Dimensions,
        Platform,
        os,
        orientation,
        window,
        screen
    }
}