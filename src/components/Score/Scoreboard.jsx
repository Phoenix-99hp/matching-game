import React, { useState } from "react";
import {
	StyledScoreboard,
	StyledScoreboardText,
	StyledScoreSpan,
	StyledRulesSpan,
	StyledRulesDiv,
	StyledCloseButton,
} from "./StyledScoreboard";
import { isMobile } from "react-device-detect";

const Scoreboard = ({ score, match, plusMinus, showFinalScore }) => {
	const [hov, setHov] = useState(false);
	return (
		<StyledScoreboard display={showFinalScore ? "none" : "flex"}>
			<StyledScoreboardText>
				<StyledRulesSpan
					onMouseOver={() => setHov(true)}
					onMouseOut={() => setHov(false)}
				>
					Instructions
				</StyledRulesSpan>
				<StyledRulesDiv hov={hov}>
					<StyledCloseButton
						display={isMobile ? "block" : "none"}
						onClick={() => setHov(false)}
					>
						x
					</StyledCloseButton>
					Click Two Tiles of the Same Color in Succession
				</StyledRulesDiv>
			</StyledScoreboardText>
			<StyledScoreboardText color={"white"}>
				<StyledScoreSpan color={"#4DF4F3"}>Score: </StyledScoreSpan>
				<StyledScoreSpan
					bold={true}
					color={score > 0 ? "#3FF20B" : score === 0 ? "white" : "#F20B0B"}
				>
					{score}
				</StyledScoreSpan>
			</StyledScoreboardText>
			<StyledScoreboardText>
				{match}
				<StyledScoreSpan
					bold={true}
					color={match === "Match!" ? "#3FF20B" : "#F20B0B"}
				>
					{" "}
					{plusMinus}
				</StyledScoreSpan>
			</StyledScoreboardText>
		</StyledScoreboard>
	);
};

export default Scoreboard;
