import { useState } from "react";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddItems = () => {
  const [data, setData] = useState("");
  const collectionRef = collection(database, "users");

  const handleInput = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const sendData = (event) => {
    event.preventDefault();
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <form onSubmit={sendData}>
        <h2>Adding Items</h2>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div>
          <label htmlFor="password">Passw: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </>
  );
};

export default AddItems;
