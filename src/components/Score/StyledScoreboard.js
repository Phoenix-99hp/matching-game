import styled from "styled-components";

export const StyledScoreboard = styled.div`
	position: relative;
	width: 200px;
	z-index: 99;
	top: 0;
	right: 0;
	color: black;
	display: ${({ display }) => display};
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	color: white;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		width: 100%;
	}
`;

export const StyledScoreboardText = styled.p`
	color: white;
	flex: 1 1 100%;
	padding: 20px;
	font-size: 25px;
	min-height: 25px;

	&:nth-of-type(1) {
		@media screen and (max-width: ${({ theme }) => theme.breakPoints.Small}) {
			padding-top: 0;
		}
	}

	&:nth-of-type(2) {
		padding: 0;
	}

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 20px;
	}
`;

export const StyledMainScoreSpan = styled.span`
	font-size: 30px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 20px;
	}
`;

export const StyledRulesSpan = styled.span`
	cursor: pointer;
	&:hover {
		color: #d54df4;
	}
`;

export const StyledScoreSpan = styled.span`
	color: ${({ color }) => color};
	font-size: 25px;
	font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 20px;
	}
`;

export const StyledSecondLine = styled.div`
	position: absolute;
	top: 0;
	right: 200px;
	border-left: 2px solid #bfc806;
	width: 12px;
	height: 130px;
`;

export const StyledRulesDiv = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	z-index: 99;
	background-color: white;
	padding: 10px;
	font-size: 25px;
	line-height: 35px;
	display: ${({ hov }) => (hov ? "block" : "none")};
	color: black;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		font-size: 20px;
	}
`;

export const StyledCloseButton = styled.button`
	background-color: red;
	position: absolute;
	top: -3px;
	right: -3px;
	border-radius: 50%;
	width: 15px;
	height: 15px;
	padding: 0 0 2px;
	margin: 0 auto;
	font-size: 10px;
	text-align: center;
	border: none;
	outline: none;
	display: ${({ display }) => display};
`;
