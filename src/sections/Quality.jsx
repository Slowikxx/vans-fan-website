import Button from '../components/Button';
import { bigShoes } from '../assets/images';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const SuperQuality = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			id="about"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-1 flex-col">
				<motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
					<h2 className="font-palanquin text-4xl  capitalize font-bold lg:max-w-lg">
						We Provide You
						<span className="text-logo-red"> Super</span>
						<span className="text-logo-red"> Quality</span> Shoes
					</h2>
					<p className="mt-4 lg:max-w-lg info-text">
						Ensuring premium comfort and style, our meticulously crafted
						footwear is designed to elevate your experience, providing you with
						unmatched quality, innovation and a touch of elegance.
					</p>
					<p className="mt-6 lg:max-w-lg info-text">
						Our dedication to detail and excellence ensures your satisfaction
					</p>
					<div className="mt-11">
						<Button label="View Details" />
					</div>
				</motion.div>
			</div>
			<motion.div
				variants={fadeIn('down', 'tween', 0.3, 1)}
				className="flex-1 flex justify-center items-center"
			>
				<img
					src={bigShoes}
					alt="bigShoes"
					width={600}
					height={552}
					className="object-contain"
				/>
			</motion.div>
		</motion.section>
	);
};

export default SuperQuality;
