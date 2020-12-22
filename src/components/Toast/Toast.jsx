import React from "react";
import { StyledToast, StyledText } from "./ToastStyle";
import { useMediaQuery } from "react-responsive";

const Toast = ({ colorOne, colorTwo, showFinalScore }) => {
	const colorOneUppercaseLetter = colorOne.charAt(0).toUpperCase();
	const colorTwoUppercaseLetter = colorTwo.charAt(0).toUpperCase();
	const colorOneSlice = colorOne.slice(1);
	const colorTwoSlice = colorTwo.slice(1);
	const uppercaseColorOne = colorOneUppercaseLetter + colorOneSlice;
	const uppercaseColorTwo = colorTwoUppercaseLetter + colorTwoSlice;
	const isSmall = useMediaQuery({
		query: "(max-width: 934px)",
	});

	return (
		<StyledToast display={showFinalScore || isSmall ? "none" : "flex"}>
			<StyledText color={colorOne}>{uppercaseColorOne}</StyledText>
			<StyledText color={colorTwo}>{uppercaseColorTwo}</StyledText>
		</StyledToast>
	);
};

export default Toast;
