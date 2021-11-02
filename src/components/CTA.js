import styled , {keyframes} from 'styled-components'

const textFade = keyframes `
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`
const CallTOAction = styled.div`
	width: 90%;
	margin: 2em auto;
	display: flex;
	flex-direction: column;
	

	h3 {
		font-size: 1.7rem;
		margin-bottom: .5em;
		animation: ${textFade} 6s ease-in;
	}

	p{
		font-size: .85rem;
		line-height: 1.7;
		margin-bottom: 3em;
		animation: ${textFade} 8s ease-in;
	}

	span {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		width: 250px;
		cursor: pointer;
		animation: ${textFade} 10s ease-in;
	}

	span:hover {
		transition: .3s all ease-in;
		opacity: .3;
	}

	span small {
		letter-spacing: .5em;
	}

	span img {
		width: 25%;
	}

	@media (min-width:1021px){
		max-width: 400px;
		margin: auto;
		gap: 2em;

		h3 {
			font-size: 2rem;
		}

		h3, p{
			margin: 0;
		}

		span {
			width: 200px
		}
		span img {
			width: 20%;
		}
	}
`

export default function CTA({title, copy, arrow}) {
	return(
		<CallTOAction>
			<h3>{title}</h3>
			<p>{copy}</p>
			<span><small>SHOP NOW</small> <img src={arrow} alt="arrow"/></span>
		</CallTOAction>
	)
} 