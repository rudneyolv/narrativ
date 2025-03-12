import IconContainer from '../IconContainer/IconContainer';
import { Star } from 'lucide-react'; // Importe o ícone desejado

interface RateIconsProps {
	rate?: 1 | 2 | 3 | 4 | 5;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function RateIcons({ rate, onClick }: RateIconsProps) {
	return (
		<div className="flex flex-row items-start justify-center">
			{[1, 2, 3, 4, 5].map(starIndex => (
				<IconContainer
					key={starIndex}
					color="light"
					active={starIndex <= rate} // Ativa a estrela se o índice for <= ao rate
					onClick={() =>
						onClick?.(rate === starIndex ? starIndex - 1 : starIndex)
					}
				>
					<Star />
				</IconContainer>
			))}
		</div>
	);
}
