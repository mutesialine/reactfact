import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const [Mode, setMode] = useState(true);
  function handleTheMode() {
    setMode((prev) => !prev);
  }
  return (
    <div
      className={`mt-36 max-w-[550px] mx-auto shadow-lg ${
        Mode ? "text-black" : "bg-black text-white"
      }`}
    >
      <Header handle={handleTheMode} mode={Mode}  />
      <Hero/>
    </div>
  );
}
