import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full z-50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-gray-400 to-gray-600 group-hover:from-white group-hover:to-gray-400 transition-all duration-300" />
      </button>
      <Component {...pageProps} />
    </>
  );
}
