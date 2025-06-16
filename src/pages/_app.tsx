import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed top-4 right-4 p-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-card-border rounded-lg shadow-lg z-50 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle dark mode"
      >
        <span className="text-xl">🌙</span>
      </button>
      <Component {...pageProps} />
    </>
  );
}
