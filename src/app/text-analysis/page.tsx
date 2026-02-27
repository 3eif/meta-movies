import GenreLanguageChart from "./GenreLanguageChart";

export default function TextAnalysis() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">Text Analysis</h1>
      <div className="w-16 h-0.5 bg-[#c9a84c] mb-10"></div>

      <div className="w-full aspect-10/7 mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          style={{ minHeight: "400px", minWidth: "320px" }}
          src="https://voyant-tools.org/tool/Cirrus/?visible=250&corpus=7b5af96b06e6109621d7fac901d24ece"
          allowFullScreen
        />
      </div>

      <div className="mt-12">
        <GenreLanguageChart />
      </div>
    </div>
  );
}
