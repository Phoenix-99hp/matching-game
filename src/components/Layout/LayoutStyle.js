import styled, { css } from "styled-components";

export const PageContainer = styled.div`
	opacity: 0;
	display: flex;
	flex-flow: column;
	min-height: 100vh;
	height: 100%;
	text-align: center;
	width: 100vw;
	background-color: #070707;
	transition: all 500ms ease-in-out;
	${(props) =>
		props.opacity &&
		css`
			opacity: 1;
		`}
`;

export const MainContent = styled.main`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	flex: 1 1 auto;
	max-width: 2000px;
	position: relative;
	// flex-flow: column;
	align-content: flex-start;
`;

// export const MainBody = styled.main`
// 	height: 100%;
// 	display: flex;
// 	// flex-wrap: wrap;
// 	justify-content: space-evenly;
// 	align-items: center;
// 	// margin: 0 auto;
// 	width: 100%;
// 	flex: 1 1 auto;
// 	// padding: 0 20px;
// 	// max-width: calc(100vw - 40px);
// 	// max-width: 1000px;
// 	position: relative;
// `;
