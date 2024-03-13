import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [items, setItems] = useState([]);
  
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDelItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleUpdateItems = (id, newValue) => {
    console.log("Updating item:", id, newValue);
    setItems(
      items.map((item) =>
        item.id === id && newValue ? { ...item, product: newValue } : item
      )
    );
    console.log("Updated items:", items);
  };
  const handleDoneItem = (id) => {
    console.log("clicked Done")
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        handleDelItems={handleDelItems}
        handleUpdateItems={handleUpdateItems}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
