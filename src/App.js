import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="header">Minimal grocery list</h1>
				<button type="button" className="btn btn-link pink-button">
					Start now
				</button>
			</header>
		</div>
	);
}

export default App;
