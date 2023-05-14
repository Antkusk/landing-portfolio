import React from 'react'
import './Home.css';
import home from './home.jpg'

export default function Home() {
	return (
		<section className='home'>
			<div className='home-text'>
				<h1 className='home-title'>
					Denis Novik
				</h1>
				<p className='home-descr'>UX | UI designer
					24 years old, Minsk
				</p>
				<p className='home-lang'>RU | ENG</p>

			</div>
			<img className='home-img' src={home} alt="" />

		</section>
	)
}
