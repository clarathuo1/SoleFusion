import Footer from "./component/Footer"
import { useState } from "react";
import "./App.css";
// import DataDisplay from "./component/DataDisplay";
import RecipeComponent from "./component/DataDisplay";
import HeroSection from "./component/HeroSection";

import Viggan from "./component/Viggan";
// import Footer from "./component/MoreDetails";
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
      <Footer/>
     </div>
		</div>
	);

}
export default App;


