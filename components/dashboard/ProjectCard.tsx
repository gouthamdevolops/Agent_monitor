import Link from 'next/link';
import type { Project } from './dashboard-data';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
      <svg viewBox="0 0 220 90" className="absolute -right-10 top-4 h-24 w-56 text-[#38BDF8]/[0.055]" aria-hidden="true">
        <path fill="currentColor" d="M205 39c8 2 15 6 15 10 0 5-11 9-25 9h-70L79 86H60l25-28H44L20 74H4l13-16H0v-18h17L4 24h16l24 16h41L60 12h19l46 28h70c3 0 7 0 10-1Z" />
      </svg>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#60A5FA]">{project.identifier}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-7 text-[#F1F5F9]">{project.name}</h3>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-[#2B4058] bg-[#0B1D32] px-3 py-1 text-xs font-semibold text-[#F1F5F9]">
          <span className={`h-2 w-2 rounded-full ${project.status === 'Connected' ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`} />
          {project.status}
        </span>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-3 border-y border-[#2B4058] py-4">
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Saved recordings</span>
          <strong className="mt-1 block font-display text-2xl text-[#F1F5F9]">{project.savedRecordings}</strong>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Latest recording</span>
          <strong className="mt-1 block text-sm font-semibold text-[#F1F5F9]">{project.latestRecordingTime}</strong>
        </div>
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="relative mt-auto inline-flex w-full items-center justify-center rounded-xl border border-[#38BDF8]/60 bg-[#0B1D32] px-4 py-3 text-sm font-bold text-[#F1F5F9] transition duration-200 hover:bg-[#38BDF8] hover:text-[#071525]"
      >
        View Recordings
      </Link>
    </article>
  );
}
