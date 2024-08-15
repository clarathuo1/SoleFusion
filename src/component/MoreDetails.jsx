import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router";

const apiUrl = import.meta.env.VITE_APP_KEY;
const MoreDetails = (m) => {
	const title = useParams;

	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(
			` https://api.spoonacular.com/recipes/${title.name}/information?apiKey=${apiUrl}`
		)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, [title]);

	return (
		<div className=" shadow-sm rounded-md  border-t-2 mt-3">
			<div className=" ">
				<div className="relative">
					<div className="group flex transform flex-col cursor-pointer overflow-hidden transition-all duration-200 shadow-md">
						<div className="overflow-hidden rounded-md relative">
							<img
								src={details.image}
								className="h-full w-full transform object-cover transition-all duration-200 group-hover:scale-105"
								width={640}
								height={480}
								alt={details.title}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-2 left-0 right-0 text-center">
				<div className="relative bg-opacity-50 backdrop-blur-sm bg-gray-800 rounded-md p-2">
					<h1 className="text-white">{details.sumary} </h1>
				</div>
			</div>
		</div>
	);
};

export default MoreDetails;
