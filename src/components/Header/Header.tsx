import Link from 'next/link';
import CustomLink from '../CustomLink/CustomLink';

export default function Header() {
	return (
		<header className="bg-main-light flex items-center justify-center gap-3 p-4">
			<nav className="flex items-center justify-center gap-3">
				<CustomLink href="/" label="Home" />
				<CustomLink href="/profile" label="profile" />
				<CustomLink href="/medias" label="medias" />
			</nav>
		</header>
	);
}
