import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
const ServiceCard = ({ imgURL, label, subtext, index }) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-6 py-8"
		>
			<div className="w-11 h-11 justify-center items-center bg-logo-red rounded-full flex">
				<img src={imgURL} alt={label} width={24} height={24} />
			</div>
			<h3 className="mt-5 font-franklinGothic text-3xl leading-normal font-bold">
				{label}
			</h3>
			<p className="mt-3 break-words britanica text-lg leading-normal text-slate-gray">
				{subtext}
			</p>
		</motion.div>
	);
};

export default ServiceCard;
