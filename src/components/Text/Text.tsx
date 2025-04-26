/** @format */

import { VariantProps } from "class-variance-authority";
import { TextStyles } from "./Text-Styles";

type TextStylesProps = VariantProps<typeof TextStyles>;

interface TextProps extends TextStylesProps {
  text: string;
}

export default function Text({ text, color, size, weight, textCase, variant }: TextProps) {
  return <p className={TextStyles({ color, size, weight, textCase, variant })}>{text}</p>;
}
