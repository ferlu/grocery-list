import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import Dashboard from './views/Dashboard';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// let path = 'home';
	// switch (path) {
	// 	case 'home':
	// 		return <Home />;
	// 	default:
	// 		return <Dashboard />;
	// }
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
