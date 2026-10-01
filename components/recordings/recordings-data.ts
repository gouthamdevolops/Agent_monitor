import { getProjectDetails, type Recording } from '@/components/project-details/project-details-data';

type RecordingStatus = Recording['status'];

export type RecordingListItem = {
  id: string;
  recordingDate: string;
  startTime: string;
  duration: string;
  status: RecordingStatus;
};

const statusCycle: RecordingStatus[] = ['Ready', 'Review', 'Processing', 'Ready', 'Ready'];
const dates = ['2026-10-01', '2026-09-30', '2026-09-29', '2026-09-28'];
const times = ['10:42 AM', '09:18 AM', '04:26 PM', '02:14 PM', '11:08 AM', '08:55 AM', '06:30 PM', '03:42 PM'];
const durations = ['08m 34s', '05m 11s', '12m 02s', '06m 25s', '09m 40s', '04m 58s', '07m 19s', '10m 04s'];

const prefixes: Record<string, string> = {
  'lease-email-extraction': 'LEX',
  'utilization-document-parser': 'UDP',
  'maintenance-reserve-capture': 'MRC',
  'redelivery-record-review': 'RRR',
  'invoice-data-extraction': 'IDE',
  'fleet-contract-ingestion': 'FCI',
};

export function getProjectRecordings(projectId: string): RecordingListItem[] {
  const prefix = prefixes[projectId] ?? 'REC';

  return Array.from({ length: 24 }, (_, index) => {
    const recordingNumber = 1100 - index;
    const date = dates[index % dates.length];

    return {
      id: `REC-${prefix}-${recordingNumber}`,
      recordingDate: date,
      startTime: times[index % times.length],
      duration: durations[index % durations.length],
      status: statusCycle[index % statusCycle.length],
    };
  });
}

export function getRecordingById(projectId: string, recordingId: string): RecordingListItem | undefined {
  const archiveRecording = getProjectRecordings(projectId).find((recording) => recording.id === recordingId);

  if (archiveRecording) {
    return archiveRecording;
  }

  const recentRecording = getProjectDetails(projectId)?.recentRecordings.find((recording) => recording.id === recordingId);

  if (!recentRecording) {
    return undefined;
  }

  const [recordingDate, startTime = 'Recorded session'] = recentRecording.date.split(', ');

  return {
    id: recentRecording.id,
    recordingDate,
    startTime,
    duration: recentRecording.duration,
    status: recentRecording.status,
  };
}
