import React from "react";
import "./ToDo.css";
import { useState } from "react";

const ToDo = () => {
  let [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState("");
  let [toggle, setToggle] = useState(false);
  //ADDING ITEMS
  const addItem = () => {
    if (!inputData) {
      alert("Enter the Item to add");
    } else if (inputData && toggle) {
      setItems(
        items.map((currItem) => {
          //   console.log(editItem);
          //   console.log(currItem.id === editItem);
          if (currItem.id === editItem) {
            return { ...currItem, name: inputData };
          } else {
            return currItem;
          }
        })
      );
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([myNewData, ...items]);
      setInputData("");
    }
    setToggle(false);
    setInputData("");
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
    setToggle(false);
    setInputData("");
  };
  //EDITING THE DATA
  const editItems = (id) => {
    setToggle(true);
    console.log("Edit Button Cliked.", id);
    const updatedData = items.find((currItem) => {
      return currItem.id === id;
    });
    setEditItem(id);
    setInputData(updatedData.name);
  };

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
            {toggle ? (
              <i
                className="fa-solid fa-pen-to-square  plus-toggle plus edit"
                onClick={addItem}
              ></i>
            ) : (
              <i className="fa-solid fa-plus plus" onClick={addItem}></i>
            )}
          </div>
          {/* show items*/}
          {items.map((currItem, value) => {
            //console.log(currItem);
            return (
              <div className="show-items" key={value}>
                <span className="added-todo">{currItem.name}</span>
                <div className="edit-delete">
                  <i
                    className="fa-solid fa-pen-to-square edit"
                    onClick={() => editItems(currItem.id)}
                  ></i>

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
