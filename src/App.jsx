import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<RecipeComponent />
		</div>
	);
}

export default App;
