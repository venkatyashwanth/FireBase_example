import { useState } from "react";
import { database } from "../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteItem = () => {
  const [data, setData] = useState("");
//   const collectionRef = collection(database, "users");

  const handleInput = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  
  const deleteData = (event) => {
    event.preventDefault();
    const docToDelete = doc(database, "users", data.id)

    deleteDoc(docToDelete)
    .then(()=> {
        alert("Data Deleted")
    })
    .catch((err)=> {
        alert(err.message)
    })
    // console.log(data.id)
  };
  return (
    <>
      <form onSubmit={deleteData}>
        <h2>Delete Items</h2>
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
          <input type="submit" value="Delete" />
        </div>
      </form>
    </>
  );
};

export default DeleteItem;
