import { useCounter } from "../hooks/useCounter"
export default function CounterApp() {
    const {counter,Increment,decrement,reset} = useCounter(1);
  return (
    <div className="flex flex-col items-center p-4 rounded-sm w-96 bg-slate-300">
      <h1 className="font-black">Counter app usando custom hooks</h1>
       <p>Counter: {counter}</p>
      <div className="flex flex-row text-white gap-x-2">  
      <button className="text-center bg-blue-600 rounded-sm w-28" onClick={Increment}>+1</button>
      <button className="text-center bg-gray-600 rounded-sm w-28" onClick={reset}>Reset</button>
      <button className="text-center bg-blue-600 rounded-sm w-28" onClick={decrement}>-1</button></div>
     
    </div>
  )
}
