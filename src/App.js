import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetItems from "./components/GetItems";
import AddItems from "./components/AddItems";
import UpdateItems from "./components/UpdateItems";
import DeleteItem from "./components/DeleteItems";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <header>
          <Nav />
        </header>
        <section>
          <Routes>
            <Route path="/getItems" element={<GetItems />}></Route>
            <Route path="/addItems" element={<AddItems />}></Route>
            <Route path="/updateItems" element={<UpdateItems />}></Route>
            <Route path="/deleteItems" element={<DeleteItem />}></Route>
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
