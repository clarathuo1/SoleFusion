import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import MoreDetails from "./component/MoreDetails.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},

	{
		path: "/moreDetails/:title",
		element: <MoreDetails />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
