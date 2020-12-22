import styled from "styled-components";

export const StyledMatch = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	border: 2px solid red;
	z-index: 99;
	top: 50%;
	left: 50%;
	color: black;
	display: ${({ text }) => (text !== "" ? "flex" : "none")};
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	color: white;
`;
