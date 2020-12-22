import styled, { css } from "styled-components";

export const StyledFinalMessage = styled.div`
	opacity: 0;
	display: ${({ display }) => display};
	width: 260px;
	position: absolute;
	align-self: center;
	left: 50%;
	transform: translateX(-50%);
	transition: all 500ms ease-in-out;
	border: 2px solid #ffe98e;
	padding: 10px;
	border-radius: 8px;
	${(props) =>
		props.display === "block" &&
		css`
			opacity: 1;
		`};
`;

export const StyledFinalText = styled.p`
	color: white;
	flex: 1 1 100%;
	padding: 20px;
	font-size: 25px;
`;

export const StyledAgainButton = styled.button`
	cursor: pointer;
	width: 70%;
	padding: 10px;
	background-color: #d54df4;
	font-size: 25px;
	border: 2px solid #d54df4;
	border-radius: 5px;
	margin: 20px 0px;
	outline: none;
	color: white;

	&:hover {
		opacity: 0.8;
	}
`;

export const StyledScoreSpan = styled.span`
	font-size: 25px;
	color: ${({ color }) => color};
`;
