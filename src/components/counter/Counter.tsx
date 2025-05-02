import { useState } from "react";

let Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  let increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
