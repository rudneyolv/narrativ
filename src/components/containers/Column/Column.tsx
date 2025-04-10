/** @format */

import { ReactNode } from "react";
import { ColumnStyles } from "./Column-Styles";

interface ColumnProps {
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  align?: "start" | "center" | "end";
  children: ReactNode;
}

export function Column({ children, gap, align }: ColumnProps) {
  return <div className={ColumnStyles({ gap, align })}>{children}</div>;
}
