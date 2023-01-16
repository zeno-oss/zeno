import { configureStore } from "@reduxjs/toolkit";
import ElectronStore from "electron-store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import createElectronStorage from "redux-persist-electron-storage";
import { rootReducer } from "store";

const electronStore = new ElectronStore();

const persistConfig = {
  key: "root",
  storage: createElectronStorage({
    electronStore,
  }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed Hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
