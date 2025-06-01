import { Button, HStack } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleCard from "./pages/User/Admin/Auth/Register";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SimpleCard />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
