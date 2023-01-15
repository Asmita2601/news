import React from "react";
// import { AppContext } from "./conponent/context";
import Pagination from "./conponent/Pagination";
import Search from "./conponent/Search";
import Stories from "./conponent/Stories";
import "./index.css";

const App = () =>{
  
  return(
    <>
   <Search />
   <Pagination />
   <Stories />
    </>
  )
}
export default App;
