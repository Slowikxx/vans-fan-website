import { BsArrowRightShort } from 'react-icons/bs';
const Button = ({
	label,
	iconUrl,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-franklinGothic text-lg leading-none ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: 'bg-button-black text-white border-none'
			} ${fullWidth && 'w-full'}`}
		>
			{label}
			{iconUrl && (
				<BsArrowRightShort className="ml-2 rounded-full w-6 h-6 text-logo-red bg-black-400" />
			)}
		</button>
	);
};

export default Button;
