import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";
import HeroSection from "./component/HeroSection";
import Viggan from "./component/Viggan";
// import Footer from "./component/MoreDetails";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			{" "}
			<div>
				<HeroSection />
			</div>
			<div>
				<RecipeComponent />
			</div>
			<div className=" m-3 shadow-sm">
				<Viggan />
			</div>
		</div>
	);
}

export default App;
