import {ResetIcon} from "@radix-ui/react-icons";

function ResetButton({setCount}) {
	return (
		<button
			onClick={(event) => {
				setCount(0);
				event.currentTarget.blur();
			}}
			className="reset-button">
			<ResetIcon className="reset-btn-icon" />
		</button>
	);
}

export default ResetButton;
