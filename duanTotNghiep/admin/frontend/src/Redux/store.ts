import { configureStore } from '@reduxjs/toolkit';
import login from './ReducerApi/Get/user/login';
import forgetPassSlile from './Reducers/login/forgetPass' 

const store = configureStore({
  reducer: {
    login,
    forgetPassSlile
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
