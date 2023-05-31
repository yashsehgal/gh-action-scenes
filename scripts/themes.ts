import { ThemesMap } from "@/app/types/theme-provider";

export default function getTheme(theme="light-mode" as ThemesMap): { background: string; content: string; } {
  const themeConfig = {
    "light-mode": {
      background: "bg-white",
      content: "text-slate-900"
    },
    "dark-mode": {
      background: "bg-slate-900",
      content: "text-slate-100"
    },
    "sublime": {
      background: "bg-slate-700",
      content: "text-yellow-600"
    },
    "neo": {
      background: "bg-purple-800",
      content: "text-purple-300"
    },
    "futuristic": {
      background: "bg-teal-800",
      content: "text-blue-300"
    },
    "minimal": {
      background: "bg-slate-100",
      content: "text-slate-800"
    }
  };

  return themeConfig[theme];
}