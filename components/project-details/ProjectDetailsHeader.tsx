import Link from 'next/link';
import { AviationLogo } from '@/components/dashboard/AviationLogo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import type { ProjectDetails } from './project-details-data';

export function ProjectDetailsHeader({ project }: { project: ProjectDetails }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#2B4058] bg-[#0B1D32]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-4">
            <AviationLogo />
            <div>
              <p className="font-display text-xl font-bold tracking-wide text-[#F1F5F9]">AeroLease Monitor</p>
              <p className="text-sm text-[#94A3B8]">Aircraft Data Extraction Monitoring Center</p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[#38BDF8]/60 bg-[#0B1D32] px-4 py-3 text-sm font-bold text-[#F1F5F9] transition duration-200 hover:bg-[#38BDF8] hover:text-[#071525]"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <ThemeToggle />
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-[#2B4058] bg-[#122941] px-4 py-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Current project</p>
              <p className="font-display text-base font-semibold text-[#F1F5F9]">{project.name}</p>
              <p className="mt-1 text-xs text-[#94A3B8]">{project.projectId}</p>
            </div>
            <span className="flex items-center gap-2 rounded-full border border-[#2B4058] bg-[#122941] px-3 py-2 text-xs font-semibold text-[#F1F5F9]">
              <span className={`h-2.5 w-2.5 rounded-full ${project.status === 'Active' ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`} />
              {project.status}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}
