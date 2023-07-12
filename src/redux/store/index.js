import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from 'redux-persist/lib/storage';
import tokenRedux from "../reducer/tokenRedux";
import privateProfileRedux from "../reducer/privateProfileRedux";
import singOut from "../reducer/signOut";
import postUser from "../reducer/postUser";
import thunk from 'redux-thunk';


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
    singout : singOut

});

const persistedReducer = persistReducer (persistConfig, rootReducer );

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);