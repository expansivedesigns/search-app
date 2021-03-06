import React from 'react';
import Result from './Result';

export default function Results({ results }) {
  return (
    <div className="component-div">
      { results.map(result => 
        <Result 
          result={result}
          // setResults={setResults}
          results={results}
          />
      ) }
    </div>
  )
}
