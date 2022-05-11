import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    mssg: "",
    type: "",
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!name) {
      //alert
      showAlert(true, "danger", "Please enter Items");
    } else if (name && isEditing) {
      //edit
    } else {
      //show alert
      showAlert(true, "success", "Item Added to List!!!");
      //create new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = function (show = false, type = "", mssg = "") {
    setAlert({ show, type, mssg });
  };
  const clearList = function () {
    showAlert(true, "danger", "Empty List");
    setList([]);
  };
  const removeItem = function (id) {
    showAlert(true, "danger", "item Removed");
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <React.Fragment>
      <section className="section-center">
        <form action="" className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Grocery</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Example..Eggs"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length >= 1 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} />
            <button className="clear-btn" onClick={() => clearList()}>
              {" "}
              clear Items
            </button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
