import styled from 'styled-components'
import {Dark, Light} from '../rooms'

const Wrapper = styled.div`
	display: grid;
	grid-template: repeat(3, auto) / auto ;

	img {
		width: 100%;
	}

	@media (min-width: 1021px){
		grid-template: auto/ 320px auto 320px ;
		img {
			width: 100;
			height: 100%;
		}
	}
`

const Article = styled.article`
	margin: 2em auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	gap: 1em;

	.title {
		font-size: .875rem;
		font-weight: 600;
		letter-spacing: .2em;

	}

	.about {
		font-size: .8rem;
		line-height: 1.5;
		font-weight: 500;
		color: #797979;
	}

	@media (min-width: 1021px){
		margin: auto;
	}

`

export default function About(){
	return(
		<Wrapper>
			<img src={Dark} alt="dark"/>
			<Article>
				<p className="title">ABOUT OUR FURNITURE</p>
				<p className="about">
					Our multifunctional collection blends design and function to suit your individual taste. 
					Make each room unique, or pick a cohesive theme that best express your interests and what 
					inspires you. Find the furniture pieces you need, from traditional to contemporary styles 
					or anything in between. Product specialists are available to help you create your dream space.
				</p>
			</Article>
			<img src={Light} alt="light"/>
		</Wrapper>
	)
}