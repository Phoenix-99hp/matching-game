import styled from "styled-components";

export const CardsContainer = styled.div`
	display: flex;
	width: 550px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: space-between;
	position: relative;
	padding: 20px;
	align-self: flex-start;
	border-radius: 15px;
	border: 10px solid #4df4f3;
	align-content: center;
	margin-top: ${({ showFinalScore }) => (showFinalScore ? "20px" : "0")};

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.medium}) {
		width: 475px;
	}

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.small}) {
		max-width: 275px;
	}
`;
