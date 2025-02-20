"use client"
import useLocalStorage from "@/hooks/useLocalStorage";
import Card from "./components/Card";
import useToggle from "@/hooks/useToggle";
import EventListenerComponent from "./components/EventListenerComponent";

export default function Home() {
  const [name, setName] = useLocalStorage("name", "");
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <Card name={"Test"} />
      <div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>
      <div>{value.toString()}</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <EventListenerComponent />
    </div>
  );
}