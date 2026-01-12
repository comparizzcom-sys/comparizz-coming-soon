export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-sm text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Compari
            <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">zz</span>
        </h1>
        <p className="mt-4 text-xl text-slate-300 font-light">
          Smarter comparisons. Faster decisions.
        </p>
        <div className="mt-8 flex justify-center items-center gap-2 text-sm font-medium text-slate-500 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Coming Soon
        </div>
      </div>
    </main>
  );
}