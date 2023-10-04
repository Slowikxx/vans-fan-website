import { services } from '../constants';
import { ServiceCard } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Services = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="max-container flex justify-center flex-wrap gap-9"
		>
			{services.map((service, i) => (
				<ServiceCard key={service.label} {...service} index={i} />
			))}
		</motion.section>
	);
};

export default Services;
