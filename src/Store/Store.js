import {configureStore} from '@reduxjs/toolkit';
import mailReducer from './ComposeSlice'

 const stores =configureStore({
    reducer:{
        mail:mailReducer
    },
})
export default stores