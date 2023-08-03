import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/countSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})