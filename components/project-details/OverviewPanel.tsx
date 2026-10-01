import type { ProjectDetails } from './project-details-data';

export function OverviewPanel({ project }: { project: ProjectDetails }) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_70px_rgba(0,0,0,0.24)] lg:p-8">
      <svg viewBox="0 0 620 180" className="absolute -right-20 top-4 h-44 w-[38rem] text-[#38BDF8]/[0.06]" aria-hidden="true">
        <path fill="currentColor" d="M573 82c17 4 31 11 31 18 0 9-23 16-51 16H360l-98 60h-40l52-60H163l-52 35H78l27-35H39c-14 0-25-7-25-16s11-16 25-16h67L78 48h33l52 36h111l-52-61h40l98 61h193c7 0 14 0 20-2Z" />
      </svg>
      <div className="relative max-w-4xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#38BDF8]/50 bg-[#0B1D32] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
            Project Overview
          </span>
          <span className="flex items-center gap-2 rounded-full border border-[#2B4058] bg-[#0B1D32] px-3 py-1 text-xs font-semibold text-[#F1F5F9]">
            <span className={`h-2 w-2 rounded-full ${project.status === 'Active' ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`} />
            {project.status}
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-[#F1F5F9] md:text-5xl">{project.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#CBD5E1]">{project.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Project ID</p>
            <p className="mt-2 font-display text-xl font-semibold text-[#F1F5F9]">{project.projectId}</p>
          </div>
          <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Monitoring Scope</p>
            <p className="mt-2 font-display text-xl font-semibold text-[#F1F5F9]">Stored rrweb recordings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
