import { Star } from 'lucide-react'; // Importe o ícone desejado
import { IconContainerStyles } from './IconContainer-Styles';
import { ReactNode } from 'react';

interface IconContainerProps {
	color?: 'primary' | 'light';
	hovercolor?: 'primary' | 'light';
	active?: boolean;
	children: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function IconContainer({
	color,
	hovercolor,
	active,
	onClick,
	children,
}: IconContainerProps) {
	return (
		<div
			onClick={onClick}
			className={IconContainerStyles({ color, hovercolor, active })}
		>
			{children}
		</div>
	);
}
