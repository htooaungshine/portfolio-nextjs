import { create } from "zustand";

type AppStoreType = {
  colorScheme: "dark" | "light";
  setColorScheme: (colorScheme: AppStoreType["colorScheme"]) => void;
};

export const AppStore = create<AppStoreType>((set) => ({
  colorScheme: "light",
  setColorScheme: (colorScheme) => set(() => ({ colorScheme })),
}));
