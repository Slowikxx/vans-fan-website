import { reviews } from '../constants';
import { ReviewCard } from '../components';
import { motion } from 'framer-motion';
import { customersVariants, customersTextVariants } from '../utils/motion';

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<motion.div
				variants={customersTextVariants}
				initial="hidden"
				whileInView="show"
			>
				<h3 className="font-franklinGothic tracking-wide text-center text-4xl font-bold">
					What Our <span className="text-logo-red">Customers</span> Say?
				</h3>
				<p className="info-text m-auto mt-4 max-w-lg text-center">
					Hear genuine stories from our satisfied customers about their
					experiences with us
				</p>
			</motion.div>

			<motion.div
				variants={customersVariants}
				initial="hidden"
				whileInView="show"
				className="mt-16 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
			>
				{reviews.map((review) => (
					<ReviewCard
						key={review.customerName}
						imgURL={review.imgURL}
						customerName={review.customerName}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default CustomerReviews;
