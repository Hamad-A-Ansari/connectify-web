export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-4 border-white/20 bg-gradient-to-b from-accent/30 to-accent/10 shadow-2xl shadow-accent/20"
      aria-hidden="true"
    >
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#0F172A]" />

      {/* Screen content placeholder */}
      <div className="absolute inset-6 top-12 rounded-[2rem] bg-[#0F172A]/80 flex flex-col items-center justify-center gap-4 p-4">
        <div className="w-12 h-12 rounded-full bg-accent/50" />
        <div className="w-3/4 h-3 rounded bg-white/20" />
        <div className="w-1/2 h-3 rounded bg-white/10" />
        <div className="mt-4 w-full space-y-3">
          <div className="w-full h-20 rounded-xl bg-white/5" />
          <div className="w-full h-20 rounded-xl bg-white/5" />
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/30" />
    </div>
  );
}
