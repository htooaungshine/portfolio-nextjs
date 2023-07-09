import { create } from "zustand";

type AppStoreType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  colorScheme: "dark" | "light";
  setColorScheme: (colorScheme: AppStoreType["colorScheme"]) => void;
};

export const AppStore = create<AppStoreType>((set) => ({
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
  colorScheme: "light",
  setColorScheme: (colorScheme) => set(() => ({ colorScheme })),
}));
