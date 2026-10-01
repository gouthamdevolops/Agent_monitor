import type { SummaryMetric } from './dashboard-data';

export function SummaryCard({ metric }: { metric: SummaryMetric }) {
  return (
    <article className="rounded-2xl border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#38BDF8]/70">
      <p className="text-sm font-medium text-[#94A3B8]">{metric.label}</p>
      <strong className="mt-3 block font-display text-3xl font-bold tracking-tight text-[#F1F5F9]">{metric.value}</strong>
      <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-[#60A5FA]">{metric.detail}</span>
    </article>
  );
}
