import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="header">Minimal grocery list</h1>
				<button type="button" className="btn btn-link pink-button">
					<Link to="/dashboard">Start now</Link>
				</button>
			</header>
		</div>
	);
}
