import React from 'react'

export default function Result( {result} ) {
  const [entries, setEntries] = useState("")

  

  return (
    <div className="component-card">
      <form onSubmit={handleEdit}>
        <input 
          type="text" 
          className="component-card-userid" 
          value={result.id}
          onChange={handleEdit}
        />
        <input
          type="text"
          className="component-card-title"
          value={result.title}
          onChange={handleEdit}
        />

        
        <input
          type="text"
          className="component-card-body"
          value={result.body}
          onChange={handleEdit}
        />

      </form>        
    
    </div>
  )
}
