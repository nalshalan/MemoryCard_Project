import { useState } from "react";
import RandomCard from './RandomCard.jsx';
import './App.css'

const images = import.meta.glob("../images/*");
const imageKeys = Object.keys(images);
console.log(imageKeys);

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      < RandomCard incrementCount={handleIncrementCount}/>
    </>
  )
}

export default App;
