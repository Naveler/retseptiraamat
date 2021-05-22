import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
const NewRecipe = (props) => {
    var [recipeName, setRecipeName] = useState("");
    var [recipeDuration, setRecipeDuration] = useState("");
    var [recipeIngredients, setRecipeIngredients] = useState("");
    var [recipePreparation, setRecipePreparation] = useState("");
    var [newRecipe, setNewRecipe] = useState({});
    function combineRecipe(event) {
        event.preventDefault();
        let arr = [];
        setNewRecipe({
            name: recipeName,
            duration: Number(recipeDuration),
            ingredients: recipeIngredients.split(","),
            preparation: recipePreparation
        })
    }
    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setNewRecipe({});
        }
      }, [newRecipe, props]);     
    return (
        <form>
            Nimi
            <input required type="text" id="name" onInput={(event) =>{setRecipeName(event.target.value)}}></input>
            Valmistusaeg (min)
            <input required type="number" id="duration" onInput={(event) =>{setRecipeDuration(event.target.value)}}></input>
            Koostisained (komaga eraldatud)
            <input required type="text" id="ingredients" onInput={(event) =>{setRecipeIngredients(event.target.value)}}></input>
            Valmistamine
            <textarea required id="preparation" onInput={(event) =>{setRecipePreparation(event.target.value)}}></textarea>
            <input type="submit" onClick={(event) => {combineRecipe(event)}}/>
        </form>
    )
}
export default withRouter(NewRecipe);