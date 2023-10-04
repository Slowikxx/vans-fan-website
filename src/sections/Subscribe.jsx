import Button from '../components/Button';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Subscribe = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			id="contact"
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
		>
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 0.5)}
				className="flex flex-col"
			>
				<p className="britanica text-slate-gray">First in, best dressed</p>
				<h3 className="text-4xl leading-[68px] lg:max-w-md font-franklinGothic font-bold">
					Sign Up for
					<span className="text-logo-red"> Updates </span>& Newsletter
				</h3>
			</motion.div>

			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 0.5)}
				className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray"
			>
				<input type="text" placeholder="subscribe@vans.com" className="input" />
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button label="Sign Up" fullWidth />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Subscribe;
