import axios from 'axios';
import { useState, useEffect  } from "react";
import Results from "./Results";

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null)

useEffect(() => {
      let fetchData = async() => {
        try {
          const res = await fetch("http://jsonplaceholder.typicode.com/posts");  
          //const res = await axios.get("/results");  //not working yet
          const data = await res.json(); 

          //console.log(data)       

          setResults(data);
 
          if(!res.ok){
            throw Error('Please type a search title.')
          }

        } catch(err){
          setError(err.message)
        }         
      }

      fetchData();
  }, []);

  let handleSubmit = e => {
    e.preventDefault();    

    //set search to title
  }
   
  return (
    <div>
      <form className="form" onSubmit={handleSubmit} >
        <input 
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search Titles'
          className="form-input"
        />
        <button className='form-button' type="submit">Search</button>
        { error && <div className="errorMsg">{ error }</div> }      
      </form>

      <div>
        <Results 
          results={results}
        />

      </div>
    </div>
  )
}
