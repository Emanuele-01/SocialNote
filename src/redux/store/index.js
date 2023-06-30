import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenRedux from "../reducer/tokenRedux";
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage, transforms: [
        encryptTransform({ secretKey: process.env.REACT_APP_KEY,
        }),
    ],
};

const rootReducer = combineReducers({

    token : tokenRedux

});

const persistedReducer = persistReducer (persistConfig, rootReducer );

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);