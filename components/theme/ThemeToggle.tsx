'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="flex items-center gap-2 rounded-xl border border-[#2B4058] bg-[#122941] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F1F5F9]">
      <span className="text-[#94A3B8]">Theme</span>
      <select
        value={theme}
        onChange={(event) => setTheme(event.target.value as 'dark' | 'light')}
        className="rounded-lg border border-[#2B4058] bg-[#0B1D32] px-2 py-1 text-xs text-[#F1F5F9] outline-none focus:border-[#38BDF8]"
        aria-label="Select theme"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </label>
  );
}
