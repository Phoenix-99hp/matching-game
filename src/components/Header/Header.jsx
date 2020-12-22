import React from "react";
import {
	StyledHeader,
	StyledMainHeading,
	StyledTopContainer,
	StyledSpacer,
	StyledRulesContainer,
} from "./HeaderStyle";

const Header = () => {
	return (
		<StyledHeader>
			<StyledTopContainer>
				<StyledRulesContainer />
				<StyledMainHeading>Matching Game</StyledMainHeading>
				<StyledSpacer />
			</StyledTopContainer>
		</StyledHeader>
	);
};

export default Header;
