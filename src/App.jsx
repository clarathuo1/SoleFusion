import { useState } from "react";

import "./App.css";
import RecipeComponent from "./component/DataDisplay";
import HeroSection from "./component/HeroSection";
import Viggan from "./component/Viggan";

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
