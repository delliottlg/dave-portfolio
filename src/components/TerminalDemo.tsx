export default function TerminalDemo() {
  return (
    <div className="font-mono text-sm text-green-300 bg-black p-4 rounded-lg">
      <p>$ npm run demo</p>
      <p>Starting interactive CLI...</p>
      <p>&gt; Running tests</p>
      <p className="text-blue-300">✔ All tests passed!</p>
    </div>
  );
}
