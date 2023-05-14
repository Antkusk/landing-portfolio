import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {



	return (
		<header className='header'>
			<nav className='header-nav'>
				<ul className='header-list'>
					<li className='list-item'><NavLink to="/">Home</NavLink></li>
					<li className='list-item'><NavLink to="/about" >About me</NavLink ></li>
					<li className='list-item'><NavLink to="/skills">Skills</NavLink></li>
					<li className='list-item'><NavLink to="/portfolio">Portfolio</NavLink></li>
					<li className='list-item'><NavLink to="/contacts">Contacts</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}
