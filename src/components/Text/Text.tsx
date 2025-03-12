import { TextStyles } from './Text-Styles';

interface TextProps {
	text: string;
	color?: 'primary' | 'secondary' | 'dark' | 'light';
	size?: 'sm' | 'lg';
	weight?: 'normal' | 'semibold' | 'bold';
	uppercase?: boolean;
}

export default function Text({
	text,
	color = 'primary',
	size = 'sm',
	weight = 'normal',
	uppercase = false,
}: TextProps) {
	return (
		<p className={TextStyles({ color, size, weight, uppercase })}>{text}</p>
	);
}
