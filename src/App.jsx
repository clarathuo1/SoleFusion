import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";
<<<<<<< HEAD
import HeroSection from "./component/HeroSection";
=======
import Viggan from "./component/Viggan";
// import Footer from "./component/MoreDetails";
>>>>>>> ft-display-data

function App() {
	const [count, setCount] = useState(0);

	return (
<<<<<<< HEAD
		<div>
			{" "}
			<div>
				<HeroSection />
			</div>
			<div>
				<RecipeComponent />
			</div>
		</div>
=======
		<main className=" bg-gray-100">
			<div className=" m-3 shadow-sm">
				<RecipeComponent />
			</div>
			<div className=" m-3 shadow-sm">
				<Viggan />
			</div>
		</main>
>>>>>>> ft-display-data
	);
}

export default App;
