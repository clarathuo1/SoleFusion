import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiUrl } from "./RecipeComponent";

const MoreDetails = () => {
	const { title } = useParams();
	const [details, setDetails] = useState();
	const [view, setView] = useState("summary");

	const fetchDetails = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${title}/information?&apiKey=${apiUrl}`
		);
		const detailData = await response.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [title]);

	if (!details) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col items-center p-4 gap-6 md:flex-row md:gap-8 lg:gap-12 ">
			{/* Image Section */}
			<div className="flex-shrink-0">
				<img
					src={details.image}
					className="w-64 h-48 object-cover rounded-md"
					alt={details.title}
				/>
			</div>

			<div className="flex-1 justify-center items-center   bg-opacity-50 backdrop-blur-md bg-gray-950 rounded-md p-4  ">
				<div className="mb-4  ">
					<button
						onClick={() => setView("ingredients")}
						className={`px-4 py-2 mr-2 font-bold text-white rounded-md space-y-3  ${
							view === "ingredients" ? "bg-blue-500" : "bg-gray-700"
						}`}
					>
						Ingredients
					</button>
					<button
						onClick={() => setView("instructions")}
						className={`px-4 py-2 font-bold text-white rounded-md ${
							view === "instructions" ? "bg-blue-500" : "bg-gray-700"
						}`}
					>
						Instructions
					</button>
				</div>
				<div>
					{view === "ingredients" && (
						<div>
							<h2 className="text-white text-xl font-semibold mb-2">
								Ingredients
							</h2>
							<ul className="list-disc list-inside text-white">
								{details.extendedIngredients.map((ingredient) => (
									<li key={ingredient.id}>{ingredient.original}</li>
								))}
							</ul>
						</div>
					)}
					{view === "instructions" && (
						<div>
							<h2 className="text-white text-xl font-semibold mb-2">
								Instructions
							</h2>
							<p className="text-white">{details.instructions}</p>
						</div>
					)}
					{view === "summary" && (
						<div>
							<h1 className="text-white text-xl font-semibold mb-2">
								{details.title}
							</h1>
							<p className="text-white">{details.summary}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MoreDetails;
