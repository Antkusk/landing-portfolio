import React from 'react'
import './Portfolio.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import { Link } from 'react-router-dom'

export default function Portfolio() {
	return (
		<section className='portfolio'>
			<h2 className='portfolio-title'>Portfolio</h2>
			<div className="portfolio-section-1">
				<img className='portfolio-img' src={img2} alt="" />
				<p className="portfolio-descr-item"><Link to="https://github.com/Antkusk/NBA">https://github.com/Antkusk/NBA/</Link></p>
			</div>
			<div className="portfolio-section-2">
				<img className='portfolio-img' src={img1} alt="" />
				<p className="portfolio-descr-item"><Link to="https://msdonalds-af34c.web.app/">https://msdonalds-af34c.web.app/</Link></p>
			</div>
		</section>
	)
}
