import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './components/api/apiSlice';
import { newsSlice } from './components/api/newsSlice';
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [newsSlice.reducerPath] : newsSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(newsSlice.middleware)

});
