
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
    }
    
});