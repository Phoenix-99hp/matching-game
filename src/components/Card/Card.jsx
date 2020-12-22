import React, { useState } from "react";
import { StyledCard, CardBack, CardFront } from "./CardStyle";

const Card = ({
	bgColor,
	selectedCards,
	setSelectedCards,
	cardsToRemove,
	index,
	shouldDisable,
	setShouldDisable,
}) => {
	const [display, setDisplay] = useState("back");

	const handleCardClick = (e) => {
		if (display === "front") {
			return;
		} else {
			setDisplay("front");
			setShouldDisable(true);
			setTimeout(() => {
				setDisplay("back");
				setShouldDisable(false);
			}, 1000);
		}
		updateSelectedCards(bgColor);
	};

	const updateSelectedCards = (col) => {
		if (selectedCards[0]) {
			setSelectedCards([...selectedCards, { secondCol: col, index: index }]);
		} else {
			setSelectedCards([{ firstCol: col, index: index }]);
		}
	};

	return (
		<StyledCard
			disabled={shouldDisable}
			onClick={(e) => handleCardClick(e)}
			hide={cardsToRemove.indexOf(bgColor) !== -1 ? true : false}
		>
			<CardBack display={display} />
			<CardFront bgColor={bgColor} display={display} />
		</StyledCard>
	);
};

export default Card;
