import { Badge } from '@/components/ui/badge';
import type { ProjectDetails } from '@/components/project-details/project-details-data';
import type { RecordingListItem } from '@/components/recordings/recordings-data';

function statusBadgeVariant(status: RecordingListItem['status']) {
  if (status === 'Ready') return 'success';
  if (status === 'Processing') return 'warning';
  return 'cyan';
}

export function RecordingMetadataPanel({ project, recording }: { project: ProjectDetails; recording: RecordingListItem }) {
  const metadata = [
    { label: 'Recording ID', value: recording.id },
    { label: 'Project Name', value: project.name },
    { label: 'Project ID', value: project.projectId },
    { label: 'Start Date and Time', value: `${recording.recordingDate} · ${recording.startTime}` },
    { label: 'Duration', value: recording.duration },
  ];

  return (
    <aside className="rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:p-6">
      <div className="mb-5 border-b border-[#2B4058] pb-5">
        <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Recording Metadata</p>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F1F5F9]">Session Details</h2>
      </div>

      <div className="space-y-3">
        {metadata.map((item) => (
          <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4" key={item.label}>
            <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">{item.label}</p>
            <p className="mt-2 font-display text-lg font-semibold text-[#F1F5F9]">{item.value}</p>
          </div>
        ))}
        <div className="rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Status</p>
          <Badge variant={statusBadgeVariant(recording.status)}>{recording.status}</Badge>
        </div>
      </div>
    </aside>
  );
}
