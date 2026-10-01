import Link from 'next/link';
import type { Recording, ProjectDetails } from './project-details-data';

function RecordingStatusBadge({ status }: { status: Recording['status'] }) {
  const colorClass = status === 'Ready' ? 'bg-[#22C55E]' : status === 'Processing' ? 'bg-[#F59E0B]' : 'bg-[#60A5FA]';

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#2B4058] bg-[#0B1D32] px-3 py-1 text-xs font-semibold text-[#F1F5F9]">
      <span className={`h-2 w-2 rounded-full ${colorClass}`} />
      {status}
    </span>
  );
}

export function RecentRecordings({ project }: { project: ProjectDetails }) {
  return (
    <section className="rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#2B4058] pb-5 md:flex-row md:items-end">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Recording Deck</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F1F5F9]">Recent Recordings</h2>
        </div>
        <Link
          href={`/projects/${project.id}/recordings`}
          className="inline-flex items-center justify-center rounded-xl border border-[#38BDF8]/60 bg-[#0B1D32] px-4 py-3 text-sm font-bold text-[#F1F5F9] transition duration-200 hover:bg-[#38BDF8] hover:text-[#071525]"
        >
          View All Recordings
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#2B4058]">
        <div className="hidden grid-cols-[1.15fr_1fr_0.7fr_0.75fr_0.6fr] gap-4 bg-[#0B1D32] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#94A3B8] md:grid">
          <span>Recording ID</span>
          <span>Date</span>
          <span>Duration</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>

        {project.recentRecordings.map((recording) => (
          <div
            className="grid gap-3 border-t border-[#2B4058] px-4 py-4 md:grid-cols-[1.15fr_1fr_0.7fr_0.75fr_0.6fr] md:items-center md:gap-4"
            key={recording.id}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] md:hidden">Recording ID</p>
              <p className="font-display text-lg font-semibold text-[#F1F5F9]">{recording.id}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] md:hidden">Date</p>
              <p className="text-sm text-[#CBD5E1]">{recording.date}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] md:hidden">Duration</p>
              <p className="text-sm font-semibold text-[#F1F5F9]">{recording.duration}</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#94A3B8] md:hidden">Status</p>
              <RecordingStatusBadge status={recording.status} />
            </div>
            <Link
              href={`/projects/${project.id}/recordings/${recording.id}/replay`}
              className="inline-flex items-center justify-center rounded-lg bg-[#38BDF8] px-3 py-2 text-sm font-bold text-[#071525] transition duration-200 hover:bg-[#60A5FA] md:justify-self-end"
            >
              Play
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
