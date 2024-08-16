import HeroSection from "./component/HeroSection";
import Viggan from "./component/Viggan";
import Navbar from "./component/Navbar";
import "./App.css";
import RecipeComponent from "./component/RecipeComponent";
import Footer from "./component/Footer";
function App() {
	return (
		<div>
			<Navbar />
			<div>
				<HeroSection />
			</div>
			<div>
				<RecipeComponent />
			</div>
			<div className=" m-3 shadow-sm">
				<Viggan />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
export default App;
