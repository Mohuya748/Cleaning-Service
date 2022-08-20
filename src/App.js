import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div>
   <Navbar>
    <Routes>
      <Route path = '/' element={<Home></Home>}></Route>
      <Route path = '/about' element={<About></About>}></Route>
      <Route path = '/services' element={<Services></Services>}></Route>
      <Route path = '/login' element={<Login></Login>}></Route>
      <Route path = '/contact' element={<Contact></Contact>}></Route>
    </Routes>
   
   </Navbar>
   
    </div>
  );
}

export default App;
