import { TextStyles } from './Text-Styles';

interface TextProps {
	text: string;
	color?:
		| 'primary'
		| 'secondary'
		| 'dark'
		| 'light'
		| 'red'
		| 'dark_red'
		| 'light_red';
	size?: 'sm' | 'lg';
	weight?: 'normal' | 'semibold' | 'bold';
	uppercase?: boolean;
}

export default function Text({
	text,
	color,
	size,
	weight,
	uppercase,
}: TextProps) {
	return (
		<p className={TextStyles({ color, size, weight, uppercase })}>{text}</p>
	);
}
