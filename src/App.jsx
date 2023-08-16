import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";
import Item from "./components/Item";



function App() {
  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form></Form>
        <PackingList>
          <Item></Item>
        </PackingList>
        <Status></Status>
      </div>
    </>

  )
}

export default App;
