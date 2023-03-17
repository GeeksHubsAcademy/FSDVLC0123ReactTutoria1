
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice';
import detailSlice from '../pages/detailSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        detail: detailSlice
    }
    
});