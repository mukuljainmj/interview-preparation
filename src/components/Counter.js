import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../utils/counterSlice";

function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          // Dispatch increment action
          dispatch(increment());
        }}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Increase Counter
      </button>
      <button
        onClick={() => {
          // Dispatch decrement action
          dispatch(decrement());
        }}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Decrease Counter
      </button>
      <button
        onClick={() => {
          // Dispatch increment by amount action
          dispatch(incrementByAmount(5)); // {type: "counter/incrementByAmount", payload: 5}
        }}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Increase Counter By Amount
      </button>
      <div>Counter - {value}</div>
    </>
  );
}

export default Counter;
