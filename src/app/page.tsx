"use client"
import useLocalStorage from "@/hooks/useLocalStorage";
import Card from "./components/Card";

export default function Home() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <Card name={"Test"} />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}