import { Button } from '@/components/ui/button';
import type { RecordingListItem } from '@/components/recordings/recordings-data';

const speeds = ['0.5x', '1x', '1.5x', '2x'];

export function ReplayPlayerShell({ recording }: { recording: RecordingListItem }) {
  return (
    <section className="rounded-[1.75rem] border border-[#2B4058] bg-[#122941] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_70px_rgba(0,0,0,0.24)] lg:p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[#2B4058] pb-5 md:flex-row md:items-end">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#38BDF8]">Replay Console</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F1F5F9] md:text-4xl">Replay Viewer</h1>
          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            Playback UI preview for {recording.id}. Actual rrweb playback will be enabled when stored event data is loaded from Azure Files.
          </p>
        </div>
      </div>

      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-[#2B4058] bg-[#050D18] md:min-h-[520px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_28rem)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent" />
        <div className="relative max-w-xl px-6 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#38BDF8]/40 bg-[#0B1D32] font-display text-2xl font-bold text-[#38BDF8]">
            rr
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#F1F5F9]">No replay event data loaded</h2>
          <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
            This placeholder is intentional. AeroLease Monitor will render the rrweb session here only after real recording events are retrieved.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#2B4058] bg-[#0B1D32] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-3">
            <Button type="button" disabled>Play</Button>
            <Button type="button" disabled variant="outline">Pause</Button>
            <Button type="button" disabled variant="outline">Restart</Button>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between text-xs text-[#94A3B8]">
              <span>00:00</span>
              <span>{recording.duration}</span>
            </div>
            <input
              aria-label="Replay timeline preview"
              disabled
              type="range"
              min="0"
              max="100"
              value="0"
              readOnly
              className="h-2 w-full cursor-not-allowed accent-[#38BDF8] opacity-60"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">Speed</span>
            {speeds.map((speed) => (
              <button
                className="rounded-lg border border-[#2B4058] bg-[#122941] px-3 py-2 text-xs font-bold text-[#94A3B8] disabled:cursor-not-allowed disabled:opacity-60"
                disabled
                key={speed}
                type="button"
              >
                {speed}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-[#94A3B8]">Controls are disabled because no actual rrweb event payload is loaded in this mock UI step.</p>
      </div>
    </section>
  );
}
