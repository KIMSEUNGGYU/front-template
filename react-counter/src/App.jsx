import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SetDiff from "./components/SetDiff";
import Counter from "./components/Counter";

function App() {
  const [diff, setDiff] = useState(1);
  const [number, setNumber] = useState(0);

  const onChangeDiff = (changedDiff) => {
    setDiff(changedDiff);
  };

  const onChangeNumber = (changedNumber) => {
    setNumber(changedNumber);
  };

  return (
    <>
      <Header />
      <main className="counter-app">
        <SetDiff diff={diff} onChangeDiff={onChangeDiff} />
        <Counter diff={diff} number={number} onChangeNumber={onChangeNumber} />
      </main>
    </>
  );
}

export default App;
