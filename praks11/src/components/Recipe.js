import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
const Recipe = (props) => {
    const id = useParams().id;
    return (
      <div>
        <h2>{props.recipes[id].name}</h2>
        <p>{props.recipes[id].duration} min</p>
        <ul>
          {props.recipes[id].ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <p>{props.recipes[id].preparation}</p>
      </div>
    )
}
export default Recipe;