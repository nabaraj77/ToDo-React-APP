import React from "react";
import "./ToDo.css";
import { useState, useEffect } from "react";

const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  //ADDING ITEMS
  const addItem = () => {
    if (!inputData) {
      alert("Enter the Item to add");
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([myNewData, ...items]);
      setInputData("");
    }
  };
  //TO DELETE ITEMS
  const deleteItems = (id) => {
    console.log("Delete Buttom Clicked", id);
    const updatedItems = items.filter((currItem) => {
      return currItem.id !== id;
    });
    setItems(updatedItems);
  };
  //TO REMOVE ALL THE ITEMS
  const removeAll = () => {
    console.log("ClearAll Cliked");
    setItems([]);
  };
  //ADDING LOCAL STORAGE
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./Images/todo.jpg" alt="ToDo Logo" />
            <figcaption>Add Your Items Here 📄</figcaption>
          </figure>
          <div className="add-items">
            <input
              type="text"
              placeholder="👉 Add Items"
              className="form"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i className="fa-solid fa-plus plus" onClick={addItem}></i>
          </div>
          {/* show items*/}
          {items.map((currItem, value) => {
            //console.log(currItem);
            return (
              <div className="show-items" key={value}>
                <span className="added-todo">{currItem.name}</span>
                <div className="edit-delete">
                  <i className="fa-solid fa-pen-to-square edit"></i>
                  <i
                    className="fa-solid fa-trash delete"
                    onClick={() => deleteItems(currItem.id)}
                  ></i>
                </div>
              </div>
            );
          })}

          {/* Delete Items */}
          <div className="button-clear">
            <button onClick={removeAll}>Clear All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
