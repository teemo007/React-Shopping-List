import React, { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [product, setProduct] = useState("test");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      console.log("New item id:", newTodo.id); // Log the id here
      handleAddItems(newTodo);
      setProduct("");
      setQuantity(1);
    }
    //console.log(items);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        className="select"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        placeholder="Enter a Name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button className="addBtn">Add</button>
    </form>
  );
};

export default Form;
