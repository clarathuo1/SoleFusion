import React, { useEffect, useState } from "react";
import { redirect } from "react-router";
// import { apiUrl } from "./";
import { Link } from "react-router-dom";
import { apiUrl } from "./RecipeComponent";

const Viggan = () => {
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		getRecipe();
	}, []);

	// this is a very interesting  thing  that i learnt  **LOCAL STORAGE*

	// resetting  the  local stored data in the  browser
	const resetLocalStorage = () => {
		localStorage.removeItem("recipe");
		setRecipe([]);
		window.location.reload();
	};

	const getRecipe = async () => {
		// Check if recipes are already in localStorage
		const storedRecipes = localStorage.getItem("recipe");

		if (storedRecipes) {
			// If recipes are found in localStorage, use them
			setRecipe(JSON.parse(storedRecipes));
		} else {
			try {
				// Fetch new recipes from the API
				const response = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${apiUrl}&number=9&tags=vegetarian`
				);

				if (!response.ok) {
					throw new Error("Something is not adding up right");
				}

				const data = await response.json();
				const recipes = data.recipes;

				// Store fetched recipes in localStorage
				localStorage.setItem("recipe", JSON.stringify(recipes));

				// Update the state with fetched recipes
				setRecipe(recipes);
			} catch (error) {
				console.error("Fetch error:", error);
			}
		}
	};

	return (
		<div className=" shadow-sm rounded-md  border-t-2 mt-3">
			<div>
				<h1> Viggan </h1>
			</div>
			<div className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 justify-center items-center p-2 md:p-4  lg:p-8 shadow-md">
				{recipe.map((recipes) => (
					<div key={recipes.id} className="relative">
						<div className="group flex transform flex-col cursor-pointer overflow-hidden transition-all duration-200 shadow-md">
							<Link
								to={`/moreDetails/${recipes.title}`}
								className="overflow-hidden rounded-md relative"
							>
								<img
									src={recipes.image}
									className="h-full w-full transform object-cover transition-all duration-200 group-hover:scale-105"
									width={640}
									height={480}
									alt={recipes.title}
								/>
								<div className="absolute bottom-2 left-0 right-0 text-center">
									<div className="relative bg-opacity-50 backdrop-blur-sm bg-gray-800 rounded-md p-2">
										<h1 className="text-white">{recipes.title}</h1>
									</div>
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Viggan;
