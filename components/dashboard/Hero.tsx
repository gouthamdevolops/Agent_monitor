export function Hero() {
  return (
    <section className="aviation-hero relative overflow-hidden rounded-[2rem] border border-[#2B4058] bg-[#0B1D32] px-6 py-14 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:px-10 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.16),transparent_34rem)]" />
      <div className="hero-clouds" aria-hidden="true">
        <span className="hero-cloud hero-cloud-one" />
        <span className="hero-cloud hero-cloud-two" />
        <span className="hero-cloud hero-cloud-three" />
        <span className="hero-cloud hero-cloud-four" />
        <span className="hero-cloud hero-cloud-five" />
      </div>
      <div className="hero-moving-aircraft" aria-hidden="true">
        <svg viewBox="0 0 900 300" className="h-full w-full">
          <path
            fill="currentColor"
            d="M829 136c24 6 44 15 44 25 0 13-33 23-73 23H522l-141 86h-57l74-86H239l-74 50h-47l39-50H57c-20 0-36-10-36-23 0-12 16-22 36-22h101l-40-51h47l75 51h158l-75-87h58l141 87h277c10 0 20 1 30 3Z"
          />
        </svg>
      </div>
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#071525_0%,rgba(7,21,37,0.9)_42%,rgba(7,21,37,0.52)_100%)]" />
      <svg
        viewBox="0 0 900 300"
        className="absolute -right-20 top-4 z-[4] h-[260px] w-[760px] text-[#38BDF8]/[0.09]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M829 136c24 6 44 15 44 25 0 13-33 23-73 23H522l-141 86h-57l74-86H239l-74 50h-47l39-50H57c-20 0-36-10-36-23 0-12 16-22 36-22h101l-40-51h47l75 51h158l-75-87h58l141 87h277c10 0 20 1 30 3Z"
        />
      </svg>
      <div className="absolute bottom-0 right-0 z-[4] h-px w-2/3 bg-gradient-to-l from-[#38BDF8]/60 to-transparent" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.28em] text-[#38BDF8]">
          Operations Replay Console
        </p>
        <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-[#F1F5F9] md:text-6xl">
          Aircraft Data Extraction Monitoring Center
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
          Centralized monitoring of aircraft leasing extraction workflows and recorded sessions.
        </p>
      </div>
    </section>
  );
}
