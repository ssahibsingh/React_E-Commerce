import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
const store = configureStore({
    reducer: rootReducers,

})

export default store;
