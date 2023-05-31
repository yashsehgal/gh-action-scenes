import { CSSProperties } from "react";

export type ThemesMap = 
  "dark-mode" | "light-mode" | "sublime" | "neo" | "futuristic" | "minimal";

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  theme: ThemesMap;
  themeManager: (theme: ThemesMap) => void;
};