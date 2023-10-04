import { star } from '../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
const ClassicProductCard = ({ imgURL, name, price, rating, index }) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.5)}
			className="flex flex-1 flex-col w-full max-sm:w-full"
		>
			<img src={imgURL} alt={name} className="w-[280px] h-[200px]" />
			<div className="mt-8 flex justify-start gap-2.5">
				<img src={star} alt="rating" width={24} height={24} />
				<p className="britanica text-xl leading-normal text-slate-gray">
					({rating})
				</p>
			</div>
			<h3 className="mt-2 text-2xl leading-normal font-semibold tracking-[0.03em] font-franklinGothic">
				{name}
			</h3>
			<p className="mt-2 font-semibold britanica text-coral-red text-2xl leading-normal">
				{price}
			</p>
		</motion.div>
	);
};

export default ClassicProductCard;
