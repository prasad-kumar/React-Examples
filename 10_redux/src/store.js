// import  {configureStore}  from "@reduxjs/toolkit";
import rootReducer from "./reducers/root";
import { legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer);

export default store;