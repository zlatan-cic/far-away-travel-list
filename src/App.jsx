import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  


  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function hanndleClearList(){
    const confirmd = window.confirm("Are you sure to dealete all items")

    if(confirmd) setItems([]);
    
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList 
          items={items} 
          onDeleteItem={handleDeleteItem} 
          onToggleItem ={handleToogleItem}
          onClearList={hanndleClearList}
        />
        <Status items={items}></Status>
      </div>
    </>
  );
}

export default App;
