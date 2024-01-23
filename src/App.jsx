import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.DETAILS} element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
