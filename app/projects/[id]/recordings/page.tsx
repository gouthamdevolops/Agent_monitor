import { notFound } from 'next/navigation';
import { RecordingsHeader } from '@/components/recordings/RecordingsHeader';
import { RecordingsTableClient } from '@/components/recordings/RecordingsTableClient';
import { getProjectRecordings } from '@/components/recordings/recordings-data';
import { getProjectDetails } from '@/components/project-details/project-details-data';

type RecordingsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecordingsPage({ params }: RecordingsPageProps) {
  const { id } = await params;
  const project = getProjectDetails(id);

  if (!project) {
    notFound();
  }

  const recordings = getProjectRecordings(project.id);

  return (
    <main className="min-h-screen bg-[#071525] text-[#F1F5F9]">
      <RecordingsHeader project={project} />

      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <section className="mb-6 rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_70px_rgba(0,0,0,0.22)] lg:p-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Stored Recording Archive</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#F1F5F9] md:text-5xl">Recordings</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#CBD5E1]">
            Browse existing rrweb recordings discovered for {project.name}. This page uses mock metadata until Azure Files integration is connected.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Project Name</p>
              <p className="mt-2 font-display text-xl font-semibold text-[#F1F5F9]">{project.name}</p>
            </div>
            <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Project ID</p>
              <p className="mt-2 font-display text-xl font-semibold text-[#F1F5F9]">{project.projectId}</p>
            </div>
            <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Total Recordings</p>
              <p className="mt-2 font-display text-xl font-semibold text-[#F1F5F9]">{recordings.length}</p>
            </div>
          </div>
        </section>

        <RecordingsTableClient projectId={project.id} recordings={recordings} />
      </div>
    </main>
  );
}
