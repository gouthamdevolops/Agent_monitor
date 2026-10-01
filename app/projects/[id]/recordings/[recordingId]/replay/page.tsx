import { notFound } from 'next/navigation';
import { getProjectDetails } from '@/components/project-details/project-details-data';
import { getRecordingById } from '@/components/recordings/recordings-data';
import { RecordingMetadataPanel } from '@/components/replay/RecordingMetadataPanel';
import { ReplayHeader } from '@/components/replay/ReplayHeader';
import { ReplayPlayerShell } from '@/components/replay/ReplayPlayerShell';

type ReplayViewerPageProps = {
  params: Promise<{
    id: string;
    recordingId: string;
  }>;
};

export default async function ReplayViewerPage({ params }: ReplayViewerPageProps) {
  const { id, recordingId } = await params;
  const project = getProjectDetails(id);

  if (!project) {
    notFound();
  }

  const recording = getRecordingById(project.id, decodeURIComponent(recordingId));

  if (!recording) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#071525] text-[#F1F5F9]">
      <ReplayHeader project={project} recording={recording} />

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:py-10">
        <ReplayPlayerShell recording={recording} />
        <RecordingMetadataPanel project={project} recording={recording} />
      </div>
    </main>
  );
}
