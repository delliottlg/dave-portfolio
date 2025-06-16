export default function MinimalBlur() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#111118] p-12">
      <div className="bg-white/20 backdrop-filter backdrop-blur-lg w-64 h-32 rounded-2xl p-4 text-white">
        Backdrop blur test
      </div>
    </div>
  );
}