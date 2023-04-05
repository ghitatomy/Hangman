import * as SecureStore from 'expo-secure-store';

export const setItem = async (key: string, value: string) => 
    SecureStore.setItemAsync(key, value, { keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY });
export const getItem = async (key: string) => SecureStore.getItemAsync(key);
export const removeItem = async (key: string) => SecureStore.deleteItemAsync(key);

  