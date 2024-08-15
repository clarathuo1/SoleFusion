import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";
import Viggan from "./component/Viggan";
// import Footer from "./component/MoreDetails";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className=" bg-gray-100">
			<div className=" m-3 shadow-sm">
				<RecipeComponent />
			</div>
			<div className=" m-3 shadow-sm">
				<Viggan />
			</div>
		</main>
	);
}

export default App;
