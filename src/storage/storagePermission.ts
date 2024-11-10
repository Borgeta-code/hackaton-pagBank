import AsyncStorage from "@react-native-async-storage/async-storage";

import { PERMISSION_STORAGE } from "@storage/storageConfig";

export async function storagePermissionSave(permission  : string) {
  await AsyncStorage.setItem(PERMISSION_STORAGE, permission);
}

export async function storagePermissionGet() {
  const storage = await AsyncStorage.getItem(PERMISSION_STORAGE);

  const permission = storage === "true" ? true : false;

  return permission;
}

export async function storagePermissionRemove() {
  await AsyncStorage.removeItem(PERMISSION_STORAGE);
}
