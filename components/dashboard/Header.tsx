import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { AviationLogo } from './AviationLogo';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#2B4058] bg-[#0B1D32]/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <AviationLogo />
          <div>
            <h1 className="font-display text-xl font-bold tracking-wide text-[#F1F5F9]">AeroLease Monitor</h1>
            <p className="text-sm text-[#94A3B8]">Aircraft Data Extraction Monitoring Center</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-3 rounded-full border border-[#2B4058] bg-[#122941] px-4 py-2 sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F1F5F9]">Systems Connected</span>
          </div>
        </div>
      </div>
    </header>
  );
}
