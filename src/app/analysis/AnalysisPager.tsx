import Link from "next/link";

type AnalysisPagerProps = {
  href: string;
  label: string;
};

export default function AnalysisPager({ href, label }: AnalysisPagerProps) {
  return (
    <section className="mt-12 border-t border-[#c9a84c]/20 pt-8">
      <Link
        href={href}
        className="btn-primary inline-flex items-center gap-2 rounded-md border border-[#c9a84c]/45 bg-[#c9a84c] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0a0a0a] transition-all duration-300 hover:bg-[#d9bf73] hover:text-[#111111]"
      >
        Next: {label}
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
