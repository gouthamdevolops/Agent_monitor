import Link from 'next/link';
import { AviationLogo } from '@/components/dashboard/AviationLogo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import type { ProjectDetails } from '@/components/project-details/project-details-data';

export function RecordingsHeader({ project }: { project: ProjectDetails }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#2B4058] bg-[#0B1D32]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-4">
            <AviationLogo />
            <div>
              <p className="font-display text-xl font-bold tracking-wide text-[#F1F5F9]">AeroLease Monitor</p>
              <p className="text-sm text-[#94A3B8]">Stored rrweb Recording Monitor</p>
            </div>
          </div>
          <Button asChild variant="outline">
            <Link href={`/projects/${project.id}`}>← Back to Project</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <ThemeToggle />
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-[#2B4058] bg-[#122941] px-4 py-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Project</p>
              <p className="font-display text-base font-semibold text-[#F1F5F9]">{project.name}</p>
              <p className="mt-1 text-xs text-[#94A3B8]">{project.projectId}</p>
            </div>
            <Badge variant={project.status === 'Active' ? 'success' : 'warning'}>
              <span className={`mr-2 h-2.5 w-2.5 rounded-full ${project.status === 'Active' ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`} />
              {project.status}
            </Badge>
          </div>

        </div>
      </div>
    </header>
  );
}
