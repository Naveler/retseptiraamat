import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
const RecipeList = (props) => {
    return (
      <div>
        {props.recipes.map((recipe, index) => {
          return <ul>
            <li key={index} recipe={recipe}><b>{props.recipes[index].name}</b> {props.recipes[index].duration} min</li><Link to={`/recipes/${index}`}>Vaata lähemalt</Link>
          </ul>
        })}
      </div>
    )
}
export default RecipeList;