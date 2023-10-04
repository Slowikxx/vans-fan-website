import {
	Hero,
	ClassicProducts,
	Quality,
	Services,
	SpecialOffer,
	Subscribe,
	CustomerReviews,
	Footer,
} from './sections';
import { Navbar } from './components';

export default function App() {
	return (
		<main className="relative overflow-hidden">
			<Navbar />
			<section className="xl:padding-l wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding">
				<ClassicProducts />
			</section>
			<section className="padding">
				<Quality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="padding bg-cream">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="padding-x padding-t pb-8 bg-light-black">
				<Footer />
			</section>
		</main>
	);
}
