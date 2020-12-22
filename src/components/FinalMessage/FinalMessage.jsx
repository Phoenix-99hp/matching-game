import React from "react";
import {
	StyledFinalMessage,
	StyledFinalText,
	StyledAgainButton,
	StyledScoreSpan,
} from "./FinalMessageStyle";

const FinalMessage = ({ finalScore, showFinalScore }) => {
	return (
		<StyledFinalMessage display={showFinalScore ? "block" : "none"}>
			<StyledFinalText>Game Complete!</StyledFinalText>
			<StyledFinalText>
				<StyledScoreSpan color={"#4DF4F3"}>Final Score: </StyledScoreSpan>
				<StyledScoreSpan
					color={
						finalScore > 0 ? "#3FF20B" : finalScore === 0 ? "white" : "#F20B0B"
					}
				>
					{finalScore}
				</StyledScoreSpan>
			</StyledFinalText>
			<StyledAgainButton onClick={() => window.location.reload()}>
				Play Again
			</StyledAgainButton>
		</StyledFinalMessage>
	);
};

export default FinalMessage;
