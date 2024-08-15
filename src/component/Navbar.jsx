import React from "react";

import "./Navbar.css";

function Navbar() {
	return (
		<header className="navbar-header">
			{/* Top Banner */}
			<div className="top-banner">Welcome To Nosh Navigator</div>

			{/* Main Navigation */}
			<nav className="main-nav">
				<div className="nav-container">
					<i className="icon-bar"></i>
					<div className="navbar-logo">NOSH NAVIGATOR</div>

					{/* Search Bar */}
					<div className="navbar-search">
						<input type="text" placeholder="Search..." />
					</div>
				</div>

				{/* Divider Line */}
				<div className="divider-line"></div>

				{/* Secondary Navigation */}
				<div className="secondary-nav">
					{["Home", "Recipes", "Ingredients", "Equipment"].map(
						(item, index) => (
							<a
								key={index}
								href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
							>
								{item}
							</a>
						)
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
