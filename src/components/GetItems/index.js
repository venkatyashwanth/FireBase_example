import { useState } from "react";
import { database } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const GetItems = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(database, "users");

  const getData = () => {
    getDocs(collectionRef).then((response) => {
      setData(response.docs);
    });
  };
  return (
    <>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.length === 0 ? (
          "No Data"
        ) : (
          <>
            <p>Data is present </p>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <h4>email: {item.data().email}</h4>
                  <p>password: {item.data().password}</p>
                  <p>id: {item.id}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default GetItems;
