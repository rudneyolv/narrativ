/** @format */

"use client";

import { Toaster } from "sonner";

export function SonnerToaster() {
  return (
    <Toaster
      position="bottom-center"
      richColors
      closeButton
      expand
      duration={5000}
      theme="light"
      toastOptions={{
        classNames: {
          toast: "font-primary shadow border-0",
        },
      }}
    />
  );
}
