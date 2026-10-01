import { projects } from '@/components/dashboard/dashboard-data';

export type Recording = {
  id: string;
  date: string;
  duration: string;
  status: 'Ready' | 'Processing' | 'Review';
};

export type ProjectDetails = {
  id: string;
  name: string;
  projectId: string;
  description: string;
  status: 'Active' | 'Inactive';
  totalRecordings: string;
  recordingsToday: string;
  totalReplayDuration: string;
  latestRecordingDate: string;
  recentRecordings: Recording[];
};

type ProjectMockDetails = Pick<
  ProjectDetails,
  'description' | 'recordingsToday' | 'totalReplayDuration' | 'latestRecordingDate' | 'recentRecordings'
>;

const mockDetails: Record<string, ProjectMockDetails> = {
  'lease-email-extraction': {
    description:
      'Monitoring view for rrweb recordings already stored by this connected project. AeroLease Monitor only displays recording metadata and replay navigation.',
    recordingsToday: '14',
    totalReplayDuration: '28h 12m',
    latestRecordingDate: 'Today, 10:42 AM',
    recentRecordings: [
      { id: 'REC-LEX-1048', date: 'Today, 10:42 AM', duration: '08m 34s', status: 'Ready' },
      { id: 'REC-LEX-1047', date: 'Today, 09:18 AM', duration: '05m 11s', status: 'Review' },
      { id: 'REC-LEX-1046', date: 'Yesterday, 04:26 PM', duration: '12m 02s', status: 'Ready' },
    ],
  },
  'utilization-document-parser': {
    description: 'Monitoring access for stored rrweb recordings from this connected project.',
    recordingsToday: '8',
    totalReplayDuration: '19h 46m',
    latestRecordingDate: 'Today, 11:05 AM',
    recentRecordings: [
      { id: 'REC-UDP-0881', date: 'Today, 11:05 AM', duration: '06m 25s', status: 'Ready' },
      { id: 'REC-UDP-0880', date: 'Today, 08:57 AM', duration: '09m 40s', status: 'Processing' },
      { id: 'REC-UDP-0879', date: 'Yesterday, 02:10 PM', duration: '04m 58s', status: 'Ready' },
    ],
  },
  'maintenance-reserve-capture': {
    description: 'Centralized monitoring view for rrweb recordings captured by this connected project.',
    recordingsToday: '5',
    totalReplayDuration: '14h 08m',
    latestRecordingDate: 'Today, 10:12 AM',
    recentRecordings: [
      { id: 'REC-MRC-0612', date: 'Today, 10:12 AM', duration: '07m 19s', status: 'Ready' },
      { id: 'REC-MRC-0611', date: 'Yesterday, 05:44 PM', duration: '10m 04s', status: 'Review' },
      { id: 'REC-MRC-0610', date: 'Yesterday, 12:33 PM', duration: '03m 52s', status: 'Ready' },
    ],
  },
};

export function getProjectDetails(projectId: string): ProjectDetails | undefined {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return undefined;
  }

  const suffix = project.identifier.split('-').at(-1) ?? '000';
  const fallback: ProjectMockDetails = {
    description: 'Monitoring view for stored rrweb recordings captured by this connected project.',
    recordingsToday: '2',
    totalReplayDuration: '06h 18m',
    latestRecordingDate: 'Yesterday, 03:18 PM',
    recentRecordings: [
      { id: `REC-${suffix}-003`, date: 'Yesterday, 03:18 PM', duration: '05m 42s', status: 'Ready' },
      { id: `REC-${suffix}-002`, date: '2 days ago, 11:20 AM', duration: '08m 03s', status: 'Review' },
      { id: `REC-${suffix}-001`, date: '2 days ago, 09:12 AM', duration: '04m 49s', status: 'Ready' },
    ],
  };

  const detail = mockDetails[project.id] ?? fallback;

  return {
    id: project.id,
    name: project.name,
    projectId: project.identifier,
    status: project.status === 'Connected' ? 'Active' : 'Inactive',
    totalRecordings: project.savedRecordings.toLocaleString(),
    ...detail,
  };
}
