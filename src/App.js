import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import AddUser from "./usesrs/AddUser";
import EditUser from "./usesrs/EditUser";
import ViewUser from "./usesrs/ViewUser";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" index element={ <Home /> } />
        <Route exact path="/addUser" element={ <AddUser /> } />
        <Route exact path="/edituser/:id" element={ <EditUser /> } />
        <Route exact path="/viewuser/:id" element={ <ViewUser /> } />
      </Routes>
    </div>
  );
}

export default App;
