import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	padding: 40px 0;
	color: white;
	display: flex;
	justify-content: space-evenly;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		padding-bottom: 0;
	}
`;

export const StyledMainHeading = styled.h1`
	font-size: 60px;
	font-family: Oxygen;
	font-weight: bold;
	width: 100%;
	text-shadow: 2px 2px 2px #d54df4;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 45px;
	}

	@media screen and (max-width: ${({ theme }) =>
			theme.breakPoints.superSmall}) {
		font-size: 35px;
	}
`;

export const StyledTopContainer = styled.div`
	width: fit-content;
`;

export const StyledSpacer = styled.div`
	height: 10px;
	border-top: 2px solid #d54df4;
	border-bottom: 2px solid #d54df4;
	margin-top: 10px;
`;

export const StyledRulesContainer = styled.div`
	width: 100%;
`;
