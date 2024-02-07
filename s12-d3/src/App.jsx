import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [deger, setDeger] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setDeger(json));
  }, []);
  console.log(deger);
  return (
    <>
      <div>
        <h2>{deger.title}</h2>
      </div>
    </>
  );
}

export default App;
