import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const UpdateItems = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

//   const collectionRef = collection(database, "users");

  const updateData = event => {
    event.preventDefault();
    const docToUpdate = doc(database, "users", data.id);
    updateDoc(docToUpdate,{
        email: data.email,
        password: data.password
    })
    .then(()=> {
        alert("Data is Updated")
    })
    .catch((err)=> {
        alert(err.message)
    })
  }
  return (
    <>
      <form onSubmit={updateData}>
        <h2>Update Items</h2>
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
          <label htmlFor="id">ID No: </label>
          <input
            type="text"
            id="id"
            placeholder="Enter Id"
            name="id"
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
      </form>
    </>
  );
};

export default UpdateItems;
