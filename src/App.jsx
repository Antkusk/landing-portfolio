import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/skills" element={<Skills />}></Route>
			</Routes>
		</>
	);
}

export default App;
