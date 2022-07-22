import * as SecureStore from 'expo-secure-store';

const setStore = (key, value) => {
    SecureStore.setItemAsync(key, value)
};

const getStore = (key) => {
    const getItem = SecureStore.getItemAsync(key)
    return getItem;
};

const removeStore = (key) => SecureStore.deleteItemAsync(key);

export {
    setStore,
    getStore,
    removeStore
}