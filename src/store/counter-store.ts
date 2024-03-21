import { create } from "zustand";


export interface CounterState {
    counter: number;

    increaseBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()( (set, get) => ({
    counter: 10,

    increaseBy: (value: number) => {
        // set( state => ({ counter: state.counter + value}) );
        set({ counter: get().counter + value });
    },
}));