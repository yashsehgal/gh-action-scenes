"use client";
import ThemeProvider from '@/app/components/theme-provider'
import './globals.css'
import { useState } from 'react'
import { ThemesMap } from '@/app/types/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<ThemesMap>("dark-mode");
  return (
    <html lang="en">
      <body className="Application-container">
        <ThemeProvider theme={theme} themeManager={setTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
