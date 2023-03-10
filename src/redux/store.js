import {configureStore} from '@reduxjs/toolkit';
import { postReducer } from './reducers/postReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
    reducer:{
        user: userReducer,
        post: postReducer
    }
});