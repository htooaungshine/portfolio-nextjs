import { create } from "zustand";

type AppStoreType = {
  showAffix: boolean;
  setShowAffix: (showAffix: AppStoreType["showAffix"]) => void;
  colorScheme: "dark" | "light";
  setColorScheme: (colorScheme: AppStoreType["colorScheme"]) => void;
  scrollToTop: boolean;
  setScrollToTop: (scrollToTop: AppStoreType["scrollToTop"]) => void;
};

export const AppStore = create<AppStoreType>((set) => ({
  showAffix: false,
  setShowAffix: (showAffix) => set(() => ({ showAffix })),
  colorScheme: "light",
  setColorScheme: (colorScheme) => set(() => ({ colorScheme })),
  scrollToTop: false,
  setScrollToTop: (scrollToTop) => set(() => ({ scrollToTop })),
}));
