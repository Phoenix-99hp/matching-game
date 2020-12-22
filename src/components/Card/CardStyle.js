import styled, { css } from "styled-components";

export const StyledCard = styled.button`
	height: 100px;
	width: 100px;
	perspective: 1000px;
	transform-style: preserve-3d;
	position: relative;
	margin-bottom: 10px;
	visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
	cursor: pointer;
	background: none;
	outline: none;
	border: none;
	border-radius: 15px;
	padding: 0;
	-webkit-tap-highlight-color: transparent;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.medium}) {
		height: 85px;
		width: 85px;
	}

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		height: 50px;
		width: 50px;
	}

	@media screen and (max-width: ${({ theme }) =>
			theme.breakPoints.superSmall}) {
		height: 40px;
		width: 40px;
	}
`;

export const CardBack = styled.div`
	position: relative;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.cardBack};
	box-shadow: 0 10px 35px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07);
	text-align: center;
	display: block;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transform: rotateY(0deg);
	${({ display }) =>
		display === "front" &&
		css`
			transform: rotateY(180deg);
		`};
	transition: -webkit-transform ease 800ms;
	transition: transform ease 800ms;
	border-radius: 15px;
	border: 2px solid #ffe98e;
`;

export const CardFront = styled.div`
	position: absolute;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	z-index: 99;
	background-color: ${(props) => props.bgColor};
	backface-visibility: hidden;
	transform-style: preserve-3d;
	box-shadow: 0 10px 35px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07);
	transform: rotateY(-180deg);
	${({ display }) =>
		display === "front" &&
		css`
			transform: rotateY(0deg);
		`};
	transition: -webkit-transform ease 800ms;
	transition: transform ease 800ms;
	border-radius: 15px;
`;
