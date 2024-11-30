import * as React from "react"
import '@/assets/index.css'
import { HeroSection } from "./sections/hero";
import { GreetingSection } from "./sections/greeting";
import { CountdownSection } from "./sections/countdown";

export interface MinimalLeafyPurpleTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
	id?: string;
}

export const MinimalLeafyPurpleTemplate = ({ children }: MinimalLeafyPurpleTemplateProps) => {

	// React.useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.isIntersecting) {
	// 				const element = entry.target as HTMLElement;

	// 				// Add Tailwind's Rombo animation classes
	// 				element.classList.add(element.dataset.animate ?? 'motion-preset-slide-up');
	// 				element.classList.remove('opacity-0');

	// 				// Optionally unobserve the element for one-time animations
	// 				observer.unobserve(element);
	// 			}
	// 		});
	// 	});
		
	// 	// Observe elements with `data-animate` attribute
	// 	document.querySelectorAll('[data-animate]').forEach((el) => {
	// 		observer.observe(el)
	// 	});
	// }, [])

	return (
		<div className="flex flex-col">
			{children}
		</div>
	)
}

MinimalLeafyPurpleTemplate.metadata = {
	name: "MinimalLeafyPurpleTemplate",
	sections: {
		'hero-section': HeroSection,
		'greeting-section': GreetingSection,
		'countdown-section': CountdownSection,
	}
}