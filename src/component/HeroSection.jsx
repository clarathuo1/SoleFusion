import React from "react";

const HeroSection = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative w-full h-screen bg-cover bg-center bg-[url('https://unsplash.com/photos/a-table-topped-with-bowls-of-food-and-chopsticks-ZBSJ57K0Vcg')]">
				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6 text-center">
					<h1 className="text-4xl font-extrabold mb-4">
						Welcome to Nosh Navigator!
					</h1>
					<p className="text-lg mb-6 max-w-lg">
						We are excited to have you on board and can’t wait for you to
						discover all the amazing recipes and cooking tips we have curated
						just for you. Dive into our menu
					</p>
					<button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
						Explore Menu
					</button>
				</div>
			</section>


			{/* Features Section */}
			<section className="w-full py-12 bg-white">
				<div className="container mx-auto flex flex-wrap justify-around">
					<div className="w-full md:w-1/3 p-4 text-center">
						<img
							src="/path-to-feature-1-image.png"
							alt="Feature 1"
							className="mx-auto mb-4 w-20 h-20 object-contain"
						/>
						<h3 className="text-xl font-semibold mb-2">Trending Foods</h3>
					</div>
					<div className="w-full md:w-1/3 p-4 text-center">
						<img
							src="/path-to-feature-2-image.png"
							alt="Feature 2"
							className="mx-auto mb-4 w-20 h-20 object-contain"
						/>
						<h3 className="text-xl font-semibold mb-2">Vegetarians</h3>
					</div>
					<div className="w-full md:w-1/3 p-4 text-center">
						<img
							src="/path-to-feature-3-image.png"
							alt="Feature 3"
							className="mx-auto mb-4 w-20 h-20 object-contain"
						/>
						<h3 className="text-xl font-semibold mb-2">
							Fast & Friendly Service
						</h3>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
