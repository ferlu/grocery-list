import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="header">Minimal shopping list</h1>
				<Link to="/dashboard" className="text-decoration-none text-primary">
					<button
						type="button"
						className="btn btn-link pink-button text-decoration-none">
						Start now
					</button>
				</Link>
			</header>
		</div>
	);
}
