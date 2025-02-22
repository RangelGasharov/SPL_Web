"use client"
import useLocalStorage from "@/hooks/useLocalStorage";
import useToggle from "@/hooks/useToggle";
import EventListenerComponent from "./components/EventListenerComponent";
import Counter from "./components/Counter";
import Controls from "./components/Controls";
import { useCounterStore } from "@/hooks/useCountStore";
import { useEffect } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);

}

export default function Home() {
  const [name, setName] = useLocalStorage("name", "");
  const [value, toggleValue] = useToggle(false);
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, [count])

  return (
    <div>
      <div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>
      <div>{value.toString()}</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <EventListenerComponent />
      <Counter />
      <Controls />
      <div>
        Count: {count}
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync}>Increment Async</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}