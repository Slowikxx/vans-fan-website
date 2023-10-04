import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import { ShoeCard, Button } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../utils/motion';

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			id="home"
			className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
		>
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 1)}
				className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36"
			>
				<p className="text-lg britanica text-logo-red">Our Collection</p>
				<h1 className="mt-3 font-franklinGothic text6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-logo-red inline-block mt-3">Vans</span> Shoes
				</h1>
				<p className="britanica text-slate-gray text-xl leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Vans arrivals, quality, comfort and innovation for
					your everyday life.
				</p>
				<Button label="Shop now" iconUrl={arrowRight} />
				<motion.div
					variants={fadeIn('up', 'tween', 0.2, 1)}
					className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
				>
					{statistics.map((stat) => (
						<div key={stat.label}>
							<p className="text-4xl font-franklinGothic font-bold">
								{stat.value}
							</p>
							<p className="leading-7 britanica text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</motion.div>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
			>
				<img
					src={bigShoeImg}
					alt="shoe collection"
					width={610}
					height={500}
					className="object-contain relative z-10 -mt-12"
				/>
				<motion.div
					variants={fadeIn('up', 'tween', 0.2, 1)}
					className="flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[10%] max-sm:px-6"
				>
					{shoes.map((image, index) => (
						<div key={index}>
							<ShoeCard
								imgURL={image}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Hero;
