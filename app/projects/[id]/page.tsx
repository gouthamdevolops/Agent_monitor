import { notFound } from 'next/navigation';
import { OverviewPanel } from '@/components/project-details/OverviewPanel';
import { ProjectDetailsHeader } from '@/components/project-details/ProjectDetailsHeader';
import { RecentRecordings } from '@/components/project-details/RecentRecordings';
import { RecordingStats } from '@/components/project-details/RecordingStats';
import { getProjectDetails } from '@/components/project-details/project-details-data';

type ProjectDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = getProjectDetails(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#071525] text-[#F1F5F9]">
      <ProjectDetailsHeader project={project} />

      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <OverviewPanel project={project} />

        <div className="mt-6">
          <RecordingStats project={project} />
        </div>

        <div className="mt-8">
          <RecentRecordings project={project} />
        </div>
      </div>
    </main>
  );
}
