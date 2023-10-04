import { products } from '../constants';
import { ClassicProductCard } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const ClassicProducts = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			id="products"
			className="max-container max-sm:mt-12"
		>
			<motion.div
				variants={fadeIn('down', 'tween', 0.2, 1)}
				className="flex flex-col justify-start gap-5"
			>
				<h2 className="text-4xl font-franklinGothic font-bold">
					Our <span className="text-logo-red">Classic</span> Products
				</h2>
				<p className="lg:max-w-lg britanica text-xl text-slate-gray">
					Experience top-notch quality and style with our most known products.
					Discover a world of comfort, design and value.
				</p>
			</motion.div>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
			>
				{products.map((product, i) => (
					<ClassicProductCard key={product.name} {...product} index={i} />
				))}
			</motion.div>
		</motion.section>
	);
};

export default ClassicProducts;
