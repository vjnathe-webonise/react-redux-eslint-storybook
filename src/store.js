import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './redux-slice/user/user-slice';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
