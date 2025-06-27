import { UserDTO } from "@dtos/userDTO"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { USER_STORAGE } from "./storageConfig"

export async function storageUserSave(newUser: UserDTO) {
  try {
    const value = JSON.stringify(newUser)
    await AsyncStorage.setItem(USER_STORAGE, value)

  } catch (error) {
    throw error
  }
}

export async function storageGetUsers() {
  try {
    const stored = await AsyncStorage.getItem(USER_STORAGE)

    const user = stored ? JSON.parse(stored) : {}

    return user

  } catch (error) {
    throw error
  }
}

export async function storageRemoveUser() {
  try {
    await AsyncStorage.removeItem(USER_STORAGE)
  } catch (error) {
    throw error
  }
}

