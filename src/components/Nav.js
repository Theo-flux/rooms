import {useRef, useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import {Logo, Menu, Close} from '../rooms'

const border = "border:1px solid magenta;"

const navIn = keyframes `
	from {
		opacity: 0;
		top: -100%;
	}

	to {
		opacity: 1;
		top: 0%;
	}
` 



const Navbar = styled.nav`
	padding: 2em 0;
	position: relative;
	top: 0%;

	animation: ${navIn} 2s ease-in;
	z-index: 997;

	.logo {
		margin: 0 auto;

	}

	@media (max-width:767px){
		.menu {
			z-index: 999;
		}

		ul {
			position: absolute;
			top: -85px;
			left: 0;
			width: 100%;
			padding: 1.9em 0;
			padding-left: 4em;
			background-color: white;
			display: flex;
			color: black;
			z-index: 998;
			border-bottom: 1px solid #16161650;

		}

		ul li {
			list-style: none;
			font-size: .9rem;
			margin: 0 1em;
			cursor: pointer;
			position: relative;
		}

		ul li::after {
			content: "";
			position:absolute;
			right: 0;
			bottom: -10px;
			height: 3px;
			width: 0%;
			transform: translate(-50%,-50%);
			background-color: black;	
		}

		ul li:hover::after {
			width: 100%;
			transition: .2s width ease-in;
			left: 50%;
		}
	}


	@media (min-width:768px){
		.menu {
			display:none;
		}

		.logo {
			margin: 0;
		}

		ul {
			display:flex;
			width: 85%;
			color: white;
		}

		ul li {
			list-style: none;
			font-size: .85rem;
			margin: 0 .5em;	
			cursor: pointer;
			position: relative;
		}

		ul li::after {
			content: "";
			position:absolute;
			right: 0;
			bottom: -10px;
			height: 3px;
			width: 0%;
			transform: translate(-50%,-50%);
			background-color: white;	
		}

		ul li:hover::after {
			width: 100%;
			transition: .2s width ease-in;
			left: 50%;
		}
	}
	
`

const Container = styled.div`
	margin: 0 auto;
	width: 90%;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
`

export default function Nav() {
	
	const slide = useRef(null)
	const [isToggled, setIsToggled] = useState(false)

	const handleToggled = () => {
		setIsToggled(!isToggled)
	}

	useEffect(() => {
		
		if(isToggled){
			slide.current.style.top = "0px"
			slide.current.style.transition = ".2s top ease-in"			
		}else{
			slide.current.style.top = "-85px"
			slide.current.style.transition = ".2s top ease-out"
		}

	},[isToggled])

	return(
		<Navbar>
			<Container>
			
				<img onClick = {handleToggled} className="menu" src={isToggled ? Close : Menu} alt= "menu-bar"/>
				<img className="logo" src={Logo} alt="logo"/>
				
				<ul ref={slide}>
					<li>home</li>
					<li>about</li>
					<li>shop</li>
					<li>contact</li>
				</ul>
			
			</Container>
		</Navbar>
	)
}