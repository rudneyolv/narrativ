/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UsernameStoreProps {
  username: string | null;
  updateUsernameStore: (username: string) => void;
  clearUsernameStore: () => void;
}

export const useUsernameStore = create<UsernameStoreProps>()(
  persist(
    (set) => ({
      username: null,
      updateUsernameStore: (username) => set({ username }),
      clearUsernameStore: () => set({ username: null }),
    }),
    {
      name: "username-store",
    }
  )
);
