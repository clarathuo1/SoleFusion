import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_RECIPE_KEY;
const DataDisplay = () => {
	const [recipe, setRecipe] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${apiUrl}&number=9`
		)
			.then((res) => res.json())
			.then((data) => setRecipe(data));
	});
    return <main>
        <div>
            {recipe.map((recipes) => (
                
            ))}
    </div>

    </main>;
};

export default DataDisplay;
