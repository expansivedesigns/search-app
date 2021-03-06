import React from 'react'
import { Link } from "react-router-dom"

export default function Result( {result} ) {
  return (

    <div className="component-card">
        <div>
          <p name="userid" className="component-card-userid"><b>id:</b> {result.id}</p>
          <p name="title" className="component-card-title"><b>title:</b> {result.title}</p>
          <p name="body" className="component-card-body"><b>body:</b> {result.body}</p>
        </div>
    </div>  
  )
}
