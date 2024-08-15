import "./App.css";
import DataDisplay from "./component/DataDisplay";
//import RecipeComponent from "./component/DataDisplay";
import HeroSection from "./component/HeroSection";
import Viggan from "./component/Viggan";
// import Footer from "./component/MoreDetails";
function App() {
	return (
		<div>
			{" "}
			<div>
				<HeroSection />
			</div>
			<div>
				<DataDisplay />
			</div>
			<div className=" m-3 shadow-sm">
				<Viggan />
			</div>
		</div>
	);
}
export default App;