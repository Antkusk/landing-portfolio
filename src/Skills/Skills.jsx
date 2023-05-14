import React from 'react';
import './Skills.css';
import js from './js.png'
import html from './html.png'
import css from './css.png'
import visualstudio from './visualstudio.png'
import StarFull from './StarFull.png'
import StarNone from './StarNone.png'

export default function Skills() {
	return (
		<section className='skills'>
			<h2 className='skills-title'>Skills</h2>
			<p className='skills-descr'>I work in such programs as</p>
			<ul className='skills-list'>
				<li className='skills-item'>
					<img className='skills-img-item' src={js} alt="" />
					<div className='skills-block-desr'>
						<p className='skills-desr-item'>JavaScript</p>
					</div>
					<ul className='skills-stars-list'>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarNone} alt="" /></li>
					</ul>
				</li>
				<li className='skills-item'>
					<img className='skills-img-item' src={html} alt="" />
					<div className='skills-block-desr'>
						<p className='skills-desr-item'>HTML</p>
					</div>
					<ul className='skills-stars-list'>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarNone} alt="" /></li>
						<li className='skills-stars-item'><img src={StarNone} alt="" /></li>
					</ul>
				</li>
				<li className='skills-item'>
					<img className='skills-img-item' src={css} alt="" />
					<div className='skills-block-desr'>
						<p className='skills-desr-item'>CSS</p>
					</div>
					<ul className='skills-stars-list'>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarNone} alt="" /></li>
						<li className='skills-stars-item'><img src={StarNone} alt="" /></li>
					</ul>
				</li>
				<li className='skills-item'>
					<img className='skills-img-item' src={visualstudio} alt="" />
					<div className='skills-block-desr'>
						<p className='skills-desr-item'>Visual Studio</p>
					</div>
					<ul className='skills-stars-list'>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
						<li className='skills-stars-item'><img src={StarFull} alt="" /></li>
					</ul>
				</li>




			</ul>

		</section>
	)
}
