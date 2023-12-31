import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from 'redux-persist/lib/storage';
import tokenRedux from "../reducer/tokenRedux";
import privateProfileRedux from "../reducer/privateProfileRedux";
import singOut from "../reducer/signOut";
import postUser from "../reducer/postUser";
import logReducer from "../reducer/logReducer";
import loading from "../reducer/loading";



const persistConfig = {
    key: 'root',
    storage, transforms: [
        encryptTransform({ secretKey: process.env.REACT_APP_KEY,
        }),
    ],
};

const rootReducer = combineReducers({

    token: tokenRedux,
    profile: privateProfileRedux,
    post: postUser,
    singout: singOut,
    loading: loading,
    login : logReducer
});

const persistedReducer = persistReducer (persistConfig, rootReducer );

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false})
    
});

export const persistor = persistStore(store);