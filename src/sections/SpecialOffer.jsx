import Button from '../components/Button';
import { offer } from '../assets/images';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const SpecialOffer = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
		>
			<motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-1">
				<img
					src={offer}
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className="flex flex-1 flex-col"
			>
				<h2 className="font-franklinGothic tracking-wide text-4xl  capitalize font-bold lg:max-w-lg">
					<span className="text-logo-red"> Special</span> Offer
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality, innovation and a touch of elegance.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" iconUrl />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default SpecialOffer;
