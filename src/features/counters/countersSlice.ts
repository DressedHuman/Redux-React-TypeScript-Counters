import { createSlice } from "@reduxjs/toolkit";

type Count = {
    id: number,
    value: number,
}

export type InitialCounts = Count[]

const initialState: InitialCounts = [
    {
        id: 1,
        value: 7,
    },
    {
        id: 2,
        value: 5,
    },
]


const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex: number = state.findIndex(c => c.id === action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const counterIndex: number = state.findIndex(c => c.id === action.payload);
            state[counterIndex].value--;
        }
    }

});

export default countersSlice.reducer;
export const {increment, decrement} = countersSlice.actions;