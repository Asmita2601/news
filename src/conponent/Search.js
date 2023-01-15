import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
const { query, serchPost } = useGlobalContext();
  return (
 <>
  <h1>Skmandal Tech Website</h1>
  <form onSubmit={(e) => e.preventDefault(0)}>
    <div>
      <input type="text" placeholder='search here' 
      value={query}
       onChange={(e) => serchPost(e.target.value)} />
    </div>
  </form>
 </>
  )
}

export default Search;