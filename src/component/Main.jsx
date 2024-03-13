import List from "./List";
import Form from "./Form";
import SortSelect from "./SortSelect";
import { useState } from "react";

const Main = ({
  items,
  handleAddItems,
  handleDelItems,
  handleUpdateItems,
  handleDoneItem,
}) => {
  const [sortBy, setSortBy] = useState("input")
  let stortedItems;
  if(sortBy === "input"){
    stortedItems =  items
  }
  if(sortBy === "packed"){
    stortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed)) //The slice() method of Array instances returns a shallow copy of a portion of an array
  }
  return (
    <div>
      <div className="sortContainer">
        <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      

      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {stortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDelItems={handleDelItems}
            handleUpdateItems={handleUpdateItems}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
