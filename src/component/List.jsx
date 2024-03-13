import React, { useState } from "react";

const List = ({ item, handleDelItems, handleUpdateItems, handleDoneItem }) => {
  const { id, product, quantity, packed } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [updateValue, setUpdateValue] = useState(product);
  const handleEdit = () => {
    //console.log(e.target)
    if (!packed) {
      setIsEditing(true);
      setUpdateValue(product);
    }
  };
  const handleUpdate = () => {
    handleUpdateItems(id, updateValue);
    setIsEditing(false);
  };
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      {isEditing ? (
        <div className="editingInput">
          <input
            className="updataInput"
            type="text"
            onChange={(e) => setUpdateValue(e.target.value)}
            value={updateValue}
          />
          <div>
            <button className="doneBtn" onClick={handleUpdate}>
              {" "}
              Update
            </button>
            <button className="delBtn" onClick={() => setIsEditing(false)}>
              {" "}
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          style={
            packed ? { textDecoration: "line-through" } : { cursor: "pointer" }
          }
          onClick={handleEdit}
        >
          {product}
        </div>
      )}

      <div>
        <button className="doneBtn" onClick={() => handleDoneItem(id)}>
          Done
        </button>
        <button className="delBtn" onClick={() => handleDelItems(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
