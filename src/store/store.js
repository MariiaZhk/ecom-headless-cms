import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { clientsReducer } from "./slice";

const clientsPersistConfig = {
  key: "clients",
  storage,
  whitelist: ["events"],
};

const persistedClientsReducer = persistReducer(
  clientsPersistConfig,
  clientsReducer
);

export const store = configureStore({
  reducer: {
    clientsSlice: persistedClientsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
