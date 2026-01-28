import { storeData } from '@/lib'

export const login = async (username: string, password: string): Promise<{ udId: string; token: string }> => {
    /// NA HET INLOGGEN!
    await storeData('udId', 'dummy-udid-1234')
    await storeData('token', 'dummy-token-5678')

    return { udId: 'dummy-udid-1234', token: 'dummy-token-5678' }
}

export const validateLogin = async (udId: string, token: string): Promise<boolean> => {
    ///TODO: API call to validate login credentials

    return true
}

/// TODO: Maak er iets echts van :)
export const scramblePassword = (password: string): string => {
    return password.split('').reverse().join('')
}
