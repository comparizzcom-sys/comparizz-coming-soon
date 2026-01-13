export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#05080a] text-slate-100 p-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bfff00]/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative w-full max-w-xl rounded-3xl border border-white/5 bg-white/[0.01] p-12 shadow-2xl backdrop-blur-xl text-center">
        {/* Logo Section */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white">
          Compari<span className="text-[#bfff00] drop-shadow-[0_0_15px_rgba(191,255,0,0.5)]">zz</span>
        </h1>
        
        {/* Tagline */}
        <p className="mt-6 text-xl text-slate-400 font-light leading-relaxed">
          Smarter comparisons. <br />
          <span className="text-slate-200 font-normal">Faster decisions.</span>
        </p>

        {/* Status Indicator */}
        <div className="mt-12 flex justify-center items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bfff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bfff00]"></span>
          </span>
          Coming Soon
        </div>
      </div>

      {/* Subtle Footer */}
      <footer className="absolute bottom-8 w-full text-center text-slate-600 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Comparizz
      </footer>
    </main>
  );
}