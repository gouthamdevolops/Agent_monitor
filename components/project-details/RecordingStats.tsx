import type { ProjectDetails } from './project-details-data';

const stats = [
  { label: 'Total Recordings', key: 'totalRecordings', detail: 'Saved rrweb sessions' },
  { label: 'Recordings Today', key: 'recordingsToday', detail: 'Discovered in stored metadata' },
  { label: 'Total Replay Duration', key: 'totalReplayDuration', detail: 'Combined recording length' },
  { label: 'Latest Recording Date', key: 'latestRecordingDate', detail: 'Most recent stored session' },
] as const;

export function RecordingStats({ project }: { project: ProjectDetails }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Recording statistics">
      {stats.map((stat) => (
        <article
          className="rounded-2xl border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[#38BDF8]/70"
          key={stat.key}
        >
          <p className="text-sm font-medium text-[#94A3B8]">{stat.label}</p>
          <strong className="mt-3 block font-display text-2xl font-bold tracking-tight text-[#F1F5F9] lg:text-3xl">
            {project[stat.key]}
          </strong>
          <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-[#60A5FA]">{stat.detail}</span>
        </article>
      ))}
    </section>
  );
}
