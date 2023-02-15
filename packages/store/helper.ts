import AsyncStorage from "@react-native-async-storage/async-storage";
import { isMobile } from "utils";

import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<any>(() => AsyncStorage);

export function persistedAtom<T>(key: string, initialValue: T) {
  if (isMobile()) {
    return atomWithStorage<T>(key, initialValue, {
      ...storage,
    });
  }
  return atomWithStorage<T>(key, initialValue);
}
