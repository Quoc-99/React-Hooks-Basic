// import HomePage from './Pages/HomePage';
import './App.scss';
import { useState } from 'react';
import Hero from './components/Hero';

function App() {
	const [count, setCount] = useState(0);

	const handleHeroClick = () => {};

	return (
		<div className="App">
			{/* <HomePage /> */}
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<Hero onClick={handleHeroClick} name="Easy Frontend" />
		</div>
	);
}

export default App;
