import { combineReducers } from "@reduxjs/toolkit";
import tokenRedux from "../reducer/tokenRedux";

const store = combineReducers({

    token : tokenRedux

});

export default store;