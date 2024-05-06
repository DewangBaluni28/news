import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import './index.css';
function App() {
  const [items , setItems]= useState([]);
  const [active , setActive]= useState(1);
  const [category , setCategory] = useState("general");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&categoty=${category}&apiKey=34cefa12432f497facad46074f013cd9`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  },[category])

  return (
    <div className="App">
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
