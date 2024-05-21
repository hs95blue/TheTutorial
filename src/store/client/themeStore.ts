import create from 'zustand';

type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // 초기 테마 설정
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export default useThemeStore;