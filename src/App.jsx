
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";
import HeroSection from "./component/HeroSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
	<RecipeComponent /> 
    <HeroSection />
		</div>
	);
}
export default App;

