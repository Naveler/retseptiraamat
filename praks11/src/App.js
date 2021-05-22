import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = () => {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(data => data.json()).then(data => setRecipes(data))
  }

  setInterval(function(){
    recipes.sort((a, b) => (a.duration > b.duration) ? 1 : -1);
  },500)
  
  useEffect(() => {
    getRecipes();
  }, []);
  function addRecipe(newRecipe) {
    setRecipes(recipes.concat([newRecipe]));
  }

  if (recipes.length !== 0) {
    return (
        <div>
          {<BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <h1>Retseptiraamat</h1>
                <Link to="/new">Lisa uus retsept</Link>
                <RecipeList recipes={recipes}/>
              </Route>
              <Route path="/recipes/:id">
                <Link to="/">tagasi avalehele</Link>
                <Recipe recipes={recipes}/>
              </Route>
              <Route path="/new">
                <Link to="/">tagasi avalehele</Link>
                <NewRecipe addRecipe={addRecipe}/>
              </Route>
            </Switch>
          </BrowserRouter>
          }
        </div>
    );
  } else {
    return (
        <div>
          {<p>Loading...</p>
          }
        </div>
    );
  }
}
export default App;