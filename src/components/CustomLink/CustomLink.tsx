import Link from 'next/link';

interface CustomLinkProps {
	href: string;
	label: string;
}

export default function CustomLink({ href, label }: CustomLinkProps) {
	return (
		<Link
			href={href}
			className="text-main-dark  font-primary font-semibold uppercase transition-all duration-300 ease-in-out hover:text-main-xdark"
		>
			{label}
		</Link>
	);
}
