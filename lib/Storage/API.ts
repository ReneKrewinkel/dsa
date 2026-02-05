import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    throw new Error('Error saving value to storage')
  }
}

export const retrieveData = async (key: string): Promise<string> => {
  try {
    return (await AsyncStorage.getItem(key)) || ''
  } catch (e) {
    throw new Error('Error reading value from storage')
  }
}

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    throw new Error('Error removing value from storage')
  }
}
