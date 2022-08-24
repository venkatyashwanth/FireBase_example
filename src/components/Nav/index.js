import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <h1>CRUD OPERATIONS_FIREBASE</h1>
        <li>
          <Link to="/getItems">Get Items</Link>
        </li>
        <li>
          <Link to="/addItems">Add Items</Link>
        </li>
        <li>
          <Link to="/updateItems">Update Items</Link>
        </li>
        <li>
          <Link to="/deleteItems">Delete Items</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
