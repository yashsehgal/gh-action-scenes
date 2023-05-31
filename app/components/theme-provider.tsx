import { cn } from "@/scripts/cn";
import getTheme from "@/scripts/themes";
import { ThemeProviderProps } from "@/app/types/theme-provider";

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ theme="light-mode", thememanager, className, ...props}) => {
  const { background, content } = getTheme(theme);
  return (
    <div className={cn("ThemeProvider-container w-[100vw] h-[100vh]", className, background, content)} id={theme} {...props}>
      {props?.children}
    </div>
  )
};

export default ThemeProvider;