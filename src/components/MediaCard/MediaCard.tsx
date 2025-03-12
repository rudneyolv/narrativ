import Link from 'next/link';
import Text from '../Text/Text';

export default function MediaCard({ title, overview, cover, date, id }) {
	return (
		<Link href={`/medias/${id}/`}>
			<div className="min-h-[400] bg-main-black border-main-xdark border-2 text-center rounded-xl flex flex-col items-center justify-start gap-1 p-1 hover:bg-main-primary">
				<img src={cover} alt={title} className="h-[100%] w-[100%] rounded-xl" />
				<Text text={title} size="sm" color="light" weight="bold" uppercase />
				<Text text={date} size="sm" color="dark" />
			</div>
		</Link>
	);
}
