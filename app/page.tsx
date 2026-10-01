import { Header } from '@/components/dashboard/Header';
import { Hero } from '@/components/dashboard/Hero';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { projects, summaryMetrics } from '@/components/dashboard/dashboard-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#071525] text-[#F1F5F9]">
      <Header />

      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <Hero />

        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Dashboard summary">
          {summaryMetrics.map((metric) => (
            <SummaryCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#2B4058] pb-5 md:flex-row md:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">
                Project Registry
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F1F5F9]">Connected Projects</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#94A3B8]">
              Select a project to review its saved rrweb recordings for aircraft leasing data extraction workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
