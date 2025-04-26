/** @format */

import Link from "next/link";
import { CustomLinkStyles } from "./CustomLink-Styles";
import { VariantProps } from "class-variance-authority";

type CustomLinkStylesProps = VariantProps<typeof CustomLinkStyles>;

interface CustomLinkProps extends CustomLinkStylesProps {
  href: string;
  label: string;
}

export default function CustomLink({ href, label, color, hoverColor }: CustomLinkProps) {
  return (
    <Link href={href} className={CustomLinkStyles({ color, hoverColor })}>
      {label}
    </Link>
  );
}
