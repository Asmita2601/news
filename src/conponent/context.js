//context creation
//provider
// consumer=useContext hook
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
   isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
}
const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children}) => {

    //useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

const fecthApiData = async (url) =>{
dispatch({ type: "SET_LOADING" });

try{
    const res =  await fetch(url);
    const data= await res.json();
    console.log(data);
    dispatch({
         type: "GET-STORIES",
      payload: {
        hits: data.hits,
        nbPages: data.nbPages,
      }
});
    // isLoading = false;
} catch (error) {
    console.log(error);
}
};
// to remove the post
const removePost = (post_ID) =>{
    dispatch({ type: "REMOVE_POST", payload: post_ID });
}
// to call the search
const serchPost = (searchQuery) =>{
    dispatch({ type: "SEARCH_QUERY",payload: searchQuery });
}
//for next page
const  getNextPage = () =>{
    dispatch({ type: "NEXT_PAGE"});
};
 // for prve page
 const getPrevPage= () =>{
    dispatch({ type: "PRVE_PAGE"});
};

// to call the api function
useEffect(() =>{
fecthApiData(`${API}query=${state.query}&page=${state.page}`);
},[state.query,state.page]);

    return <AppContext.Provider value={{ ...state, removePost, serchPost, getNextPage,getPrevPage }}>{children}</AppContext.Provider>
};

//custom hook create
const useGlobalContext =() =>{
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext};