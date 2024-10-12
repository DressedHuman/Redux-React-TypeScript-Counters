import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/countersSlice';


const store = configureStore({
    reducer: {
        counters: counterReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;