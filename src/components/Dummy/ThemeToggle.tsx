'use client';
import { Button } from '../ui/button';

// Marque como client component

export default function ThemeToggle() {
	const toggleTheme = () => {
		const htmlElement = document.documentElement;
		if (htmlElement.classList.contains('dark')) {
			htmlElement.classList.remove('dark');
		} else {
			htmlElement.classList.add('dark');
		}
	};

	return (
		<Button
			onClick={toggleTheme}
			style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}
		>
			Toggle Theme
		</Button>
	);
}
