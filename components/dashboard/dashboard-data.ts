export type SummaryMetric = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  id: string;
  name: string;
  identifier: string;
  savedRecordings: number;
  latestRecordingTime: string;
  status: 'Connected' | 'Pending';
};

export const summaryMetrics: SummaryMetric[] = [
  { label: 'Connected Projects', value: '06', detail: 'Database links configured' },
  { label: 'Total Recordings', value: '1,284', detail: 'Stored rrweb sessions' },
  { label: 'Recordings Today', value: '37', detail: 'New workflow recordings' },
  { label: 'Total Replay Duration', value: '86h 24m', detail: 'Across all projects' },
];

export const projects: Project[] = [
  {
    id: 'lease-email-extraction',
    name: 'Lease Email Extraction',
    identifier: 'AERO-LEX-001',
    savedRecordings: 428,
    latestRecordingTime: '12 minutes ago',
    status: 'Connected',
  },
  {
    id: 'utilization-document-parser',
    name: 'Utilization Document Parser',
    identifier: 'AERO-UDP-002',
    savedRecordings: 316,
    latestRecordingTime: '34 minutes ago',
    status: 'Connected',
  },
  {
    id: 'maintenance-reserve-capture',
    name: 'Maintenance Reserve Capture',
    identifier: 'AERO-MRC-003',
    savedRecordings: 219,
    latestRecordingTime: '1 hour ago',
    status: 'Connected',
  },
  {
    id: 'redelivery-record-review',
    name: 'Redelivery Record Review',
    identifier: 'AERO-RRR-004',
    savedRecordings: 164,
    latestRecordingTime: 'Yesterday',
    status: 'Connected',
  },
  {
    id: 'invoice-data-extraction',
    name: 'Invoice Data Extraction',
    identifier: 'AERO-IDE-005',
    savedRecordings: 92,
    latestRecordingTime: 'Yesterday',
    status: 'Connected',
  },
  {
    id: 'fleet-contract-ingestion',
    name: 'Fleet Contract Ingestion',
    identifier: 'AERO-FCI-006',
    savedRecordings: 65,
    latestRecordingTime: '2 days ago',
    status: 'Pending',
  },
];
