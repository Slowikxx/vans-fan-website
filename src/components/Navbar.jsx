import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import { slideIn, navVariants, staggerContainer } from '../utils/motion';

const Navbar = () => {
	return (
		<motion.header
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="padding-x py-8 absolute z-10 w-full"
		>
			<motion.nav
				variants={navVariants}
				initial="hidden"
				whileInView="show"
				className="flex justify-between items-center max-container"
			>
				<a href="/">
					<img src={headerLogo} alt="logo" width={120} height={25} />
				</a>
				<ul className="flex-1 flex justify-center items-center gap-24 max-lg:hidden">
					{navLinks.map((link) => (
						<a
							href={link.href}
							className="font-franklinGothic text-slate-gray hover:text-black hover:border-b-4 border-logo-red leading-normal text-xl"
						>
							{link.label}
						</a>
					))}
				</ul>
				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						alt="hamburger"
						width={25}
						height={25}
						className="cursor-pointer"
					/>
				</div>
			</motion.nav>
		</motion.header>
	);
};

export default Navbar;
