import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import {useEffect, useState} from "react";
import CountButton from "./CountButton";

function Card() {
	const [count, setCount] = useState(0);
	const locked = count == 5;

	useEffect(() => {
		const handleKeydown = (event) => {
			if (event.code === "Space") {
				const newCount = count + 1;
				if (newCount > 5) {
					setCount(5);
					return;
				}
				setCount(count + 1);
			}
		};

		window.addEventListener("keydown", handleKeydown);

		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [count]);

	return (
		<div className={`card ${locked ? "card--limit" : ""}`}>
			<Title locked={locked} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<ButtonContainer>
				<CountButton
					locked={locked}
					type={"minus"}
					setCount={setCount}
				/>
				<CountButton
					locked={locked}
					type={"plus"}
					setCount={setCount}
				/>
			</ButtonContainer>
		</div>
	);
}

export default Card;
