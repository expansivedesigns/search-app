import React from 'react'
import {useState} from 'react'

export default function Result( {result} ) {
  const [entries, setEntries] = useState("");


const handleSubmit = e => {
    setEntries(prev => prev.map(entry => {
        return entry.id === result.id ? {...entry, id: result.id, title: result.title, body: result.body} : result;
    }))
}

//todoForm
const handleEdit = e => {  //sends input entered on form to be displays
    const { name, value } = e.target;

    setEntries(prev => ({ ...prev, [name] : value }));  
}
  return (
    <div className="component-card">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="id"
          className="component-card-userid" 
          value={result.id}
          onChange={handleEdit}
        />
        <input
          type="text"
          name="title"
          className="component-card-title"
          value={result.title}
          onChange={handleEdit}
        />

        
        <input
          type="text"
          name="body"
          className="component-card-body"
          value={result.body}
          onChange={handleEdit}
        />

        <button onChange={handleEdit}>
            Edit            
        </button>

      </form>        
    
    </div>
  )
}
