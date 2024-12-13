import { useEffect, useState } from "react";
import Coffee from "./components/presentation/Coffee";
import Menu from "./components/layout/Menu";

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((v) => setCoffees((prev) => [...v]));
  }, []);

  return (
    <Menu
      children={coffees.map((v) => (
        <Coffee {...v} />
      ))}
    />
  );
}

export default App;
