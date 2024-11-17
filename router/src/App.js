import{ Route , Routes, } from "react-router-dom";

import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Navbar from "./Navbar";


import './index.css';


const  App = () => {
  return (
<>
<Navbar/>

<Routes>
<Route path="/"element={<Home></Home>}/>
<Route path="/Gallery"element={<Gallery></Gallery>}/>
<Route path="/Service"element={<Service></Service>}/>
<Route path="/Contact" element={<Contact></Contact>}/>
</Routes>
</>

  );
};
export default App;