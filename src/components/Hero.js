import {useState, useRef} from 'react'
import styled, {keyframes} from 'styled-components'
import {useMediaQuery} from 'react-responsive'
import {mobileRooms,desktopRooms, Arrow, title, copy} from '../rooms'
import CTA from './CTA'
import About from './About'

const moveIn = keyframes `
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const controlAnimation = keyframes `
	0% {
		right: -100%;
		opacity: 0;
	}

	50% {
		right: -50%;
		opacity:.5;
	}

	100% {
		right: 0%;
		opacity: 1;
	}
}
`
const Absolute = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	animation: ${moveIn} 2s ease-in;
`

const Main = styled.div`
	width: 100vw;	

	img {
		width: 100%;	
	}

	.carousel  {
		width: 100%;
		
	}

	.carousel-slider {
		position:relative;
		display: grid;
		grid-template: auto / 100vw;
		overflow-x:hidden;
	}

	.carousel-controls {
		animation: ${controlAnimation} 2s ease-in;
		display: inline-flex;
		position: absolute;
		bottom: 0%;
		right:0%;
	}

	.carousel-controls i {
		background-color: black;
		color: white;
		font-size: 1.5rem;
		padding: .5em 1em;
		cursor: pointer;
	}

	.carousel-controls i:hover {
		background-color: #292929;
	}

	.controls-desktop {
		display: none;
	}

	@media (min-width:1021px) {
		display: flex;
		justify-content: center;
		align-items: flex-start;

		.carousel {
			width:60%;
		}

		.carousel-slider {
			grid-template: auto / 60vw;
		}

		.carousel-controls {
			animation: ${controlAnimation} 2s ease-in;
			display: inline-flex;
			bottom: 202px;
			right: 375px;
		}

		.controls-mobile {
			display: none;
		}

	}
`

export default function Hero() {
	const isMobile = useMediaQuery({query:'(max-width: 767px)'})
	let [slideIndex, setSlideIndex] = useState(0)
	const image = useRef(null)

	const nextSlide = () => {
		if(slideIndex < mobileRooms.length-1){
			slideIndex += 1
		}else{
			slideIndex = 0
		}
		setSlideIndex(slideIndex)
	}

	const prevSlide = () => {
		slideIndex -= 1
		if(slideIndex < 0){
			slideIndex = mobileRooms.length-1
		}
		setSlideIndex(slideIndex)
	}

	return(
		<Absolute>
			<Main>
				
				<div className="carousel">
					<div className="carousel-slider">
						<img ref={image} src={isMobile ? mobileRooms[slideIndex] : desktopRooms[slideIndex]}  alt="hero"/>
						<div className="carousel-controls controls-mobile">
							<i onClick={prevSlide} className="ri-arrow-left-s-line"></i>
							<i onClick={nextSlide} className="ri-arrow-right-s-line"></i>
						</div>
					</div>
				</div>

				
				<CTA 
					title={title[slideIndex]}
					copy={copy[slideIndex]}
					arrow = {Arrow}
				/>

				<div className="carousel-controls controls-desktop">
					<i onClick={prevSlide} className="ri-arrow-left-s-line"></i>
					<i onClick={nextSlide} className="ri-arrow-right-s-line"></i>
				</div>
				
			
			</Main>
			<About/>
		</Absolute>
	)
}