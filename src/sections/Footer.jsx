import { footerLogo } from '../assets/images';
import { socialMedia, footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants } from '../utils/motion';

const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="max-container"
		>
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} alt="footer logo" width={150} height={46} />
					</a>
					<p className="mt-6 text-base leading-7 britanica text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Vans store. Find
						Your perfect Size In Store.
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((icon) => (
							<div
								className={`flex justify-center items-center w-12 h-12 bg-white ${icon.hover} cursor-pointer rounded-full `}
							>
								<img src={icon.src} alt={icon.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section}>
							<h4 className="text-white britanica text-2xl leading-normal font-medium mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="mt-3 text-white-400 britanica text-base leading-normal cursor-pointer hover:text-slate-gray"
									>
										<a href="#">{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<motion.div
				variants={fadeIn('up', 'spring', 0.2, 0.5)}
				className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
			>
				<div className="flex flex-1 justify-start items-center gap-2 britanica cursor-pointer">
					<img
						src={copyrightSign}
						alt="copyright"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p>Copyright. All rights reserved.</p>
				</div>
				<p className="britanica cursor-pointer">Terms & Conditions</p>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;
