import { create } from "zustand";
import Counter from "./Counter";
// define the shape of store which the zustand uses , it will contain the 
// state variable and functions to update it

interface CountetStore
{
    counter: number
    increment: () => void
    reset : () => void
}
// returns customm hook
const useCounterStore = create<CountetStore>(set => ({
    counter: 0,
    increment : () =>   set(store => ({counter: store.counter+1})),
    reset:() => set(() => ({counter:0}))
}))

export default useCounterStore;
//  set(store => ({counter: store.counter+1}))
// takes the current state and returns the next state
// set is function which takes the initial state and fucntion to update it