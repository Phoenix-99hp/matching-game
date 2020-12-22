import React, { useLayoutEffect, useEffect, useState } from "react";
import Card from "../Card/Card";
import { CardsContainer } from "./CardsStyle";
import Toast from "../Toast/Toast";
import Scoreboard from "../Score/Scoreboard";
import FinalMessage from "../FinalMessage/FinalMessage";
import theme from "../../theme/theme";

const Cards = ({ num }) => {
	const cardColors = [];
	const colors = theme.colors;
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);
	const [cardsToRemove, setCardsToRemove] = useState([]);
	const [toastMatch, setToastMatch] = useState({ match: "", plusMinus: "" });
	const [toastColors, setToastColors] = useState({ one: "", two: "" });
	const [score, setScore] = useState(0);
	const [showFinalScore, setShowFinalScore] = useState(false);
	const [shouldDisable, setShouldDisable] = useState(false);

	const checkForTwoOfColor = (color) => {
		const filtered = cardColors.filter(
			() => cardColors.indexOf(color) !== cardColors.lastIndexOf(color)
		);
		if (filtered[0]) {
			return true;
		} else {
			return false;
		}
	};

	const generateRandomColors = () => {
		for (let i = 0; i < num; i++) {
			// 15 including 0 in Math.random
			const numOfColors = colors.length - 1;
			// 15 colors from 0 to 14
			const int = Math.floor(Math.random() * numOfColors);
			cardColors.push(colors[int]);
			if (checkForTwoOfColor(colors[int])) {
				colors.splice(int, 1);
			}
		}
		setSelectedColors(cardColors);
	};

	const checkForLastMatch = () => {
		if (cardsToRemove.length === num - 2) {
			setShowFinalScore(true);
		} else {
			return false;
		}
	};

	const checkForMatch = (arr) => {
		if (arr[1]) {
			if (
				arr[0].firstCol === arr[1].secondCol &&
				arr[0].index !== arr[1].index
			) {
				setCardsToRemove([
					...cardsToRemove,
					selectedCards[0].firstCol,
					selectedCards[1].secondCol,
				]);
				setToastMatch({ match: "Match!", plusMinus: "+10" });
				setTimeout(() => {
					setToastMatch({ match: "", plusMinus: "" });
					setToastColors({ one: "", two: "" });
					setSelectedCards([]);
					setShouldDisable(false);
				}, 1000);
				setScore(score + 10);
				checkForLastMatch();
				return true;
			} else if (arr[0].index === arr[1].index) {
				setToastMatch({ match: "Same Card!", plusMinus: "-1" });
				setTimeout(() => {
					setToastMatch({ match: "", plusMinus: "" });
					setToastColors({ one: "", two: "" });
					setSelectedCards([]);
					setShouldDisable(false);
				}, 1000);
				setScore(score - 1);
				return false;
			} else {
				setToastMatch({ match: "No Match", plusMinus: "-1" });
				setTimeout(() => {
					setToastMatch({ match: "", plusMinus: "" });
					setToastColors({ one: "", two: "" });
					setSelectedCards([]);
					setShouldDisable(false);
				}, 1000);
				setScore(score - 1);
				return false;
			}
		} else {
			return false;
		}
	};

	useEffect(() => {
		generateRandomColors();
	}, []);

	useLayoutEffect(() => {
		if (selectedCards.length === 2) {
			setToastColors({
				one: selectedCards[0].firstCol,
				two: selectedCards[1].secondCol,
			});
			checkForMatch(selectedCards);
		} else if (selectedCards.length === 1) {
			setToastColors({ one: selectedCards[0].firstCol, two: "" });
		}
	}, [selectedCards]);

	return (
		<>
			<Scoreboard
				match={toastMatch.match}
				score={score}
				plusMinus={toastMatch.plusMinus}
				showFinalScore={showFinalScore}
			/>
			<CardsContainer showFinalScore={showFinalScore}>
				{selectedColors.map((col, i) => (
					<Card
						setShouldDisable={setShouldDisable}
						shouldDisable={shouldDisable}
						setSelectedCards={setSelectedCards}
						selectedCards={selectedCards}
						bgColor={col}
						index={i}
						key={i}
						cardsToRemove={cardsToRemove}
					/>
				))}
				<FinalMessage showFinalScore={showFinalScore} finalScore={score} />
			</CardsContainer>
			<Toast
				colorOne={toastColors.one}
				colorTwo={toastColors.two}
				showFinalScore={showFinalScore}
			/>
		</>
	);
};

export default Cards;
