import {configureStore} from '@reduxjs/toolkit';
import mailReducer from './mailSlice'
import UserReducer from './UserSlice';

 const stores =configureStore({
    reducer:{
        mail:mailReducer,
        user:UserReducer
    },
})
export default stores