import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from '../assets/icons';

import {
	era,
	oldSchool,
	sk8hi,
	slipon,
	bigShoe1,
	bigShoe2,
	bigShoe3,
	customer1,
	customer2,
	customer3,
	thumbnailShoe1,
	thumbnailShoe2,
	thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
	{ href: '#home', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#products', label: 'Products' },
	{ href: '#contact', label: 'Contact' },
];

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1,
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2,
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3,
	},
];

export const statistics = [
	{ value: '1k+', label: 'Brands' },
	{ value: '2k+', label: 'Shops' },
	{ value: '950k+', label: 'Customers' },
];

export const products = [
	{
		imgURL: era,
		name: 'Vans Classic Era',
		price: '$72.67',
		rating: '5.0',
	},
	{
		imgURL: oldSchool,
		name: 'Vans Old Skool',
		price: '$82.87',
		rating: '4.8',
	},
	{
		imgURL: sk8hi,
		name: 'Vans Sk8-Hi',
		price: '$95.62',
		rating: '4.6',
	},
	{
		imgURL: slipon,
		name: 'Vans Slip-On',
		price: '$82.87',
		rating: '4.5',
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: 'Free shipping',
		subtext:
			'Unlock the joy of effortless shopping with our free and secure shipping.',
	},
	{
		imgURL: shieldTick,
		label: 'Secure Payment',
		subtext:
			'Experience worry-free transactions with our secure payment options.',
	},
	{
		imgURL: support,
		label: 'Love to help you',
		subtext:
			'Our dedicated team of specialists is ready to assist you every step of the way.',
	},
];

export const reviews = [
	{
		imgURL: customer1,
		customerName: 'Daniel Garcia',
		rating: 4.6,
		feedback:
			'Incredible support and style in one package – these shoes have become my instant favorites.',
	},
	{
		imgURL: customer2,
		customerName: 'Megan Thompson',
		rating: 4.9,
		feedback:
			"Comfort meets elegance – these shoes stand out whether I'm at the office or out with friends.",
	},
	{
		imgURL: customer3,
		customerName: 'Joseph Wilson',
		rating: 4.5,
		feedback:
			'Finally, shoes that keep up with my workouts. The lightweight design and traction are a game-changer.',
	},
];

export const footerLinks = [
	{
		title: 'Products',
		links: [
			{ name: 'Era', link: '/' },
			{ name: 'Old Skool', link: '/' },
			{ name: 'Sk8-Hi', link: '/' },
			{ name: 'Authentic', link: '/' },
			{ name: 'Cruze', link: '/' },
			{ name: 'Slip-On', link: '/' },
		],
	},
	{
		title: 'Customer care',
		links: [
			{ name: 'About', link: '/' },
			{ name: 'FAQs', link: '/' },
			{ name: 'Student Discount', link: '/' },
			{ name: 'Privacy policy', link: '/' },
			{ name: 'Payment policy', link: '/' },
		],
	},
	{
		title: 'Contact',
		links: [
			{ name: 'customer@vans.com', link: 'mailto:customer@vans.com' },
			{ name: '+92554862354', link: 'tel:+92554862354' },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: 'facebook', hover: 'hover:bg-[#4267B2]' },
	{ src: instagram, alt: 'instagram', hover: 'hover:bg-[#C13584]' },
	{ src: twitter, alt: 'twitter', hover: 'hover:bg-[#1DA1F2]' },
];
