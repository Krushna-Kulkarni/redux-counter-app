import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByValue
} from "../counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(0);

  return (
    <>
      <div className="counterDiv">
        <button onClick={() => dispatch(decrement())}>-</button>{" "}
        <span className="counterValueDiv">{count}</span>{" "}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <br />
      <div>
        <input
          onChange={(e) => setIncrementBy(e.target.value)}
          className="incrementByValueInputDiv"
          placeholder="Enter value..."
        />{" "}
        <button
          onClick={() => dispatch(incrementByValue(Number(incrementBy) || 0))}
        >
          Add
        </button>{" "}
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementBy) || 0))}
        >
          Add Async
        </button>
      </div>
      <br />
      <div>
        Note: Add Async will increment the counter by given input value after 3
        secs
      </div>
    </>
  );
};
