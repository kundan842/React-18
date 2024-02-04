
// handling two action either increment or decrement so type can be string or union of values
interface Action
{
    type: 'INCREMENT' | 'RESET'
}
const CounterReducer = (state: number, action:Action): number =>
{
    if (action.type === 'INCREMENT'  ) return state+1
    if (action.type === 'RESET') return 0
    return state

}

export default CounterReducer