'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { RecordingListItem } from './recordings-data';

type RecordingsTableClientProps = {
  projectId: string;
  recordings: RecordingListItem[];
};

const pageSize = 8;
const statusOptions = ['All', 'Ready', 'Processing', 'Review'] as const;
const dateOptions = ['All', '2026-10-01', '2026-09-30', '2026-09-29', '2026-09-28'] as const;

function statusBadgeVariant(status: RecordingListItem['status']) {
  if (status === 'Ready') return 'success';
  if (status === 'Processing') return 'warning';
  return 'cyan';
}

export function RecordingsTableClient({ projectId, recordings }: RecordingsTableClientProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<(typeof statusOptions)[number]>('All');
  const [date, setDate] = useState<(typeof dateOptions)[number]>('All');
  const [page, setPage] = useState(1);

  const filteredRecordings = useMemo(() => {
    return recordings.filter((recording) => {
      const matchesSearch = recording.id.toLowerCase().includes(search.trim().toLowerCase());
      const matchesStatus = status === 'All' || recording.status === status;
      const matchesDate = date === 'All' || recording.recordingDate === date;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [recordings, search, status, date]);

  const totalPages = Math.max(1, Math.ceil(filteredRecordings.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedRecordings = filteredRecordings.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function clearFilters() {
    setSearch('');
    setStatus('All');
    setDate('All');
    setPage(1);
  }

  function updateSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  function updateStatus(value: (typeof statusOptions)[number]) {
    setStatus(value);
    setPage(1);
  }

  function updateDate(value: (typeof dateOptions)[number]) {
    setDate(value);
    setPage(1);
  }

  return (
    <section className="rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#2B4058] pb-5 lg:flex-row lg:items-end">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Recording Archive</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F1F5F9]">Recordings</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">Search and filter stored rrweb recording metadata for this project.</p>
        </div>
        <div className="rounded-xl border border-[#2B4058] bg-[#0B1D32] px-4 py-3 text-sm text-[#CBD5E1]">
          Total recordings: <strong className="text-[#F1F5F9]">{recordings.length}</strong>
        </div>
      </div>

      <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_190px_190px_auto]">
        <input
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
          placeholder="Search recording ID..."
          className="h-11 rounded-xl border border-[#2B4058] bg-[#0B1D32] px-4 text-sm text-[#F1F5F9] outline-none transition placeholder:text-[#64748B] focus:border-[#38BDF8]"
        />
        <select
          value={status}
          onChange={(event) => updateStatus(event.target.value as (typeof statusOptions)[number])}
          className="h-11 rounded-xl border border-[#2B4058] bg-[#0B1D32] px-4 text-sm text-[#F1F5F9] outline-none transition focus:border-[#38BDF8]"
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option === 'All' ? 'All statuses' : option}
            </option>
          ))}
        </select>
        <select
          value={date}
          onChange={(event) => updateDate(event.target.value as (typeof dateOptions)[number])}
          className="h-11 rounded-xl border border-[#2B4058] bg-[#0B1D32] px-4 text-sm text-[#F1F5F9] outline-none transition focus:border-[#38BDF8]"
        >
          {dateOptions.map((option) => (
            <option key={option} value={option}>
              {option === 'All' ? 'All dates' : option}
            </option>
          ))}
        </select>
        <Button type="button" variant="outline" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#2B4058]">
        <div className="hidden grid-cols-[1.15fr_0.85fr_0.75fr_0.7fr_0.75fr_0.6fr] gap-4 bg-[#0B1D32] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#94A3B8] lg:grid">
          <span>Recording ID</span>
          <span>Recording Date</span>
          <span>Start Time</span>
          <span>Duration</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>

        {paginatedRecordings.length > 0 ? (
          paginatedRecordings.map((recording) => (
            <div
              className="grid gap-3 border-t border-[#2B4058] px-4 py-4 transition hover:bg-[#0B1D32]/70 lg:grid-cols-[1.15fr_0.85fr_0.75fr_0.7fr_0.75fr_0.6fr] lg:items-center lg:gap-4"
              key={recording.id}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] lg:hidden">Recording ID</p>
                <p className="font-display text-lg font-semibold text-[#F1F5F9]">{recording.id}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] lg:hidden">Recording Date</p>
                <p className="text-sm text-[#CBD5E1]">{recording.recordingDate}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] lg:hidden">Start Time</p>
                <p className="text-sm text-[#CBD5E1]">{recording.startTime}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#94A3B8] lg:hidden">Duration</p>
                <p className="text-sm font-semibold text-[#F1F5F9]">{recording.duration}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#94A3B8] lg:hidden">Status</p>
                <Badge variant={statusBadgeVariant(recording.status)}>{recording.status}</Badge>
              </div>
              <Button asChild size="sm" className="lg:justify-self-end">
                <Link href={`/projects/${projectId}/recordings/${recording.id}/replay`}>Play</Link>
              </Button>
            </div>
          ))
        ) : (
          <div className="border-t border-[#2B4058] px-4 py-10 text-center text-sm text-[#94A3B8]">
            No recordings match the current search or filters.
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-[#94A3B8]">
          Page <span className="font-semibold text-[#F1F5F9]">{currentPage}</span> of{' '}
          <span className="font-semibold text-[#F1F5F9]">{totalPages}</span>
        </p>
        <div className="flex gap-3">
          <Button type="button" variant="outline" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
            Previous
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
