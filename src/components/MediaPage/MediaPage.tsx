'use client';

import { Star } from 'lucide-react'; // Importe o ícone desejado
import { StarFilled } from 'lucide-react'; // Importe o ícone StarFilled
import Text from '../Text/Text';
import IconContainer from '../IconContainer/IconContainer';
import RateIcons from '../RateIcons/RateIcons';
import { useState } from 'react';

export default function MediaPage({ title, overview, cover, date, id }) {
	const [rateValue, setRateValue] = useState(3);

	const handleRateValue = value => {
		setRateValue(value);
	};

	return (
		<div className=" w-screen h-screen flex flex-col items-center justify-center bg-main-xdark">
			<div className="h-[400] bg-main-black border-main-xdark border-2 text-center rounded-xl flex flex-col items-center justify-start gap-1 p-1 hover:bg-main-primary">
				<img src={cover} alt={title} className="h-[100%] w-[100%] rounded-xl" />
				<Text text={title} size="sm" color="light" weight="bold" uppercase />
				<Text text={date} size="sm" color="dark" />
			</div>

			<RateIcons rate={rateValue} onClick={handleRateValue} />
		</div>
	);
}
