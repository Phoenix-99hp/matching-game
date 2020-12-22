import styled from "styled-components";

export const StyledToast = styled.div`
	position: relative;
	width: 200px;
	z-index: 99;
	top: 0;
	left: 0;
	color: black;
	display: ${({ display }) => display};
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	color: white;
	border-radius: 3px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		width: 150px;
	}
`;

export const StyledText = styled.p`
	color: ${({ color }) => color};
	display: block;
	width: 100%;
	padding: 20px;
	font-size: 25px;
	min-height: 25px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 20px;
	}
`;
