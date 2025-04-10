/** @format */

// lib/react-query.ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minuto de cache
      refetchOnWindowFocus: false,
    },
  },
});
