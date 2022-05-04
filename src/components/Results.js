import React from 'react';
import Result from './Result';

export default function Results({ results, setResults }) {
  return (
    <div className="component-div">
      { results.map(result => 
        <Result 
          result={result}
        />
      ) }
    </div>
  )
}
