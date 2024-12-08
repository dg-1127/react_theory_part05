import { useEffect, useState } from "react";
import Coffee from "./components/presentation/Coffee";
import Menu from "./components/layout/Menu";

function App() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((v) => setCoffee((prev) => [...v]));
  }, []);

  return (
    <Menu
      children={coffee.map((v) => (
        <Coffee {...v} />
      ))}
    />
  );
}

export default App;
