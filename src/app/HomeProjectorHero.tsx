import Link from "next/link";

const dustSpecs = [
  { left: "8%", top: "18%", size: 2, duration: "9s", delay: "0.5s" },
  { left: "14%", top: "30%", size: 1.4, duration: "11s", delay: "1.2s" },
  { left: "20%", top: "42%", size: 2.5, duration: "10s", delay: "0.2s" },
  { left: "26%", top: "24%", size: 1.6, duration: "8s", delay: "1.8s" },
  { left: "31%", top: "36%", size: 1.1, duration: "12s", delay: "0.8s" },
  { left: "38%", top: "20%", size: 2.2, duration: "9s", delay: "2.2s" },
  { left: "44%", top: "31%", size: 1.5, duration: "10s", delay: "0.4s" },
  { left: "49%", top: "44%", size: 2.1, duration: "11s", delay: "1.5s" },
  { left: "56%", top: "27%", size: 1.7, duration: "8s", delay: "2.8s" },
  { left: "63%", top: "39%", size: 2.3, duration: "12s", delay: "0.7s" },
  { left: "68%", top: "22%", size: 1.3, duration: "9s", delay: "1.1s" },
  { left: "73%", top: "34%", size: 2.4, duration: "10s", delay: "2.4s" },
  { left: "79%", top: "18%", size: 1.2, duration: "11s", delay: "1.6s" },
  { left: "84%", top: "28%", size: 2, duration: "8s", delay: "0.9s" },
  { left: "89%", top: "40%", size: 1.6, duration: "10s", delay: "2s" },
  { left: "16%", top: "56%", size: 2.2, duration: "12s", delay: "0.3s" },
  { left: "24%", top: "66%", size: 1.5, duration: "8s", delay: "1.4s" },
  { left: "35%", top: "61%", size: 2.1, duration: "11s", delay: "0.6s" },
  { left: "46%", top: "70%", size: 1.2, duration: "9s", delay: "2.5s" },
  { left: "58%", top: "63%", size: 2.3, duration: "10s", delay: "1.7s" },
  { left: "69%", top: "68%", size: 1.4, duration: "12s", delay: "0.1s" },
  { left: "77%", top: "58%", size: 2.2, duration: "8s", delay: "2.1s" },
  { left: "86%", top: "72%", size: 1.7, duration: "11s", delay: "1.9s" },
  { left: "92%", top: "54%", size: 1.1, duration: "9s", delay: "0.4s" },
];

function ProjectorCamera() {
  return (
    <svg
      className="projector-camera-svg"
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="projector-rg1" cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="60%" stopColor="#222" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>
        <radialGradient id="projector-rg2" cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor="#3e3e3e" />
          <stop offset="60%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </radialGradient>
        <radialGradient id="projector-hub" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#666" />
          <stop offset="100%" stopColor="#333" />
        </radialGradient>
        <radialGradient id="projector-lens" cx="38%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="50%" stopColor="#222" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id="projector-glare" cx="35%" cy="35%" r="40%">
          <stop offset="0%" stopColor="#ddc880" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="projector-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#151515" />
        </linearGradient>
      </defs>

      <rect
        x="30"
        y="148"
        width="160"
        height="130"
        rx="5"
        fill="url(#projector-bg)"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <rect
        x="52"
        y="168"
        width="90"
        height="72"
        rx="2"
        fill="#0c0c0c"
        stroke="#2a2a2a"
        strokeWidth="0.8"
      />
      {[
        174, 182, 190, 198, 206, 214,
      ].map((y) => (
        <g key={y}>
          <rect x="55" y={y} width="4" height="3" rx="0.5" fill="#080808" />
          <rect x="135" y={y} width="4" height="3" rx="0.5" fill="#080808" />
        </g>
      ))}

      <circle cx="168" cy="182" r="6" fill="#333" stroke="#2a2a2a" strokeWidth="0.8" />
      <circle cx="168" cy="182" r="2.5" fill="#444" />

      <ellipse cx="215" cy="213" rx="28" ry="36" fill="#1e1e1e" stroke="#1a1a1a" strokeWidth="1.5" />
      <ellipse cx="222" cy="213" rx="24" ry="30" fill="#171717" />
      <ellipse
        cx="228"
        cy="213"
        rx="20"
        ry="25"
        fill="url(#projector-lens)"
        stroke="#1a1a1a"
        strokeWidth="1"
      />
      <ellipse
        cx="220"
        cy="213"
        rx="26"
        ry="32"
        fill="none"
        stroke="#2e2e2e"
        strokeWidth="0.4"
      />
      <ellipse
        className="projector-lens-glare"
        cx="232"
        cy="208"
        rx="9"
        ry="11"
        fill="url(#projector-glare)"
        opacity="0.2"
      />
      <circle cx="234" cy="213" r="4" fill="rgba(240,210,140,0.15)" />
      <circle cx="234" cy="213" r="2" fill="rgba(255,230,160,0.25)" />

      <rect x="72" y="102" width="6" height="52" fill="#222" stroke="#1a1a1a" strokeWidth="0.6" />
      <g className="projector-reel-left">
        <circle cx="75" cy="82" r="60" fill="url(#projector-rg1)" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="75" cy="82" r="50" fill="none" stroke="#2a2a2a" strokeWidth="0.4" />
        <circle cx="75" cy="82" r="38" fill="none" stroke="#262626" strokeWidth="0.3" />
        <circle cx="75" cy="82" r="26" fill="#181818" />
        <circle cx="75" cy="82" r="12" fill="url(#projector-hub)" stroke="#3a3a3a" strokeWidth="0.8" />
        <circle cx="75" cy="82" r="3.5" fill="#555" />
        <line x1="75" y1="70" x2="75" y2="94" stroke="#444" strokeWidth="1.2" opacity="0.5" />
        <line x1="63" y1="82" x2="87" y2="82" stroke="#444" strokeWidth="1.2" opacity="0.5" />
        <line x1="67" y1="74" x2="83" y2="90" stroke="#444" strokeWidth="0.8" opacity="0.3" />
        <line x1="83" y1="74" x2="67" y2="90" stroke="#444" strokeWidth="0.8" opacity="0.3" />
      </g>

      <rect x="152" y="92" width="6" height="62" fill="#222" stroke="#1a1a1a" strokeWidth="0.6" />
      <g className="projector-reel-right">
        <circle cx="155" cy="72" r="66" fill="url(#projector-rg2)" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="155" cy="72" r="56" fill="none" stroke="#282828" strokeWidth="0.4" />
        <circle cx="155" cy="72" r="42" fill="none" stroke="#242424" strokeWidth="0.3" />
        <circle cx="155" cy="72" r="30" fill="#161616" />
        <circle cx="155" cy="72" r="13" fill="url(#projector-hub)" stroke="#3a3a3a" strokeWidth="0.8" />
        <circle cx="155" cy="72" r="4" fill="#555" />
        <line x1="155" y1="59" x2="155" y2="85" stroke="#444" strokeWidth="1.2" opacity="0.5" />
        <line x1="142" y1="72" x2="168" y2="72" stroke="#444" strokeWidth="1.2" opacity="0.5" />
        <line x1="146" y1="63" x2="164" y2="81" stroke="#444" strokeWidth="0.8" opacity="0.3" />
        <line x1="164" y1="63" x2="146" y2="81" stroke="#444" strokeWidth="0.8" opacity="0.3" />
      </g>

      <path
        d="M 75 142 C 75 155, 105 160, 120 155 C 135 150, 148 147, 155 138"
        fill="none"
        stroke="#2a2424"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomeProjectorHero() {
  return (
    <section className="projector-hero">
      <div className="projector-hero__grain" />
      <div className="projector-hero__vignette" />

      <div className="projector-hero__camera" aria-hidden="true">
        <ProjectorCamera />
      </div>

      <div className="projector-hero__beam" aria-hidden="true">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="projector-cone" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(220,185,110,0.18)" />
              <stop offset="30%" stopColor="rgba(220,185,110,0.06)" />
              <stop offset="70%" stopColor="rgba(220,185,110,0.03)" />
              <stop offset="100%" stopColor="rgba(220,185,110,0.01)" />
            </linearGradient>
            <filter id="projector-blur">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <polygon
            points="0,270 0,330 1000,600 1000,0"
            fill="url(#projector-cone)"
            filter="url(#projector-blur)"
          />
          <polygon
            points="0,285 0,315 1000,450 1000,150"
            fill="rgba(230,200,130,0.04)"
            filter="url(#projector-blur)"
          />
          <line x1="0" y1="270" x2="1000" y2="0" stroke="rgba(220,185,110,0.04)" strokeWidth="2" />
          <line x1="0" y1="330" x2="1000" y2="600" stroke="rgba(220,185,110,0.04)" strokeWidth="2" />
        </svg>
      </div>

      <div className="projector-hero__dust" aria-hidden="true">
        {dustSpecs.map((spec, index) => (
          <span
            key={`${spec.left}-${spec.top}-${index}`}
            className={`projector-dust projector-dust--${index % 2 === 0 ? "a" : "b"}`}
            style={{
              left: spec.left,
              top: spec.top,
              width: `${spec.size}px`,
              height: `${spec.size}px`,
              animationDuration: spec.duration,
              animationDelay: spec.delay,
            }}
          />
        ))}
      </div>

      <div className="projector-hero__content">
        <h1 className="projector-title">
          <span>Meta</span>
          <span>Movies</span>
        </h1>
        <div className="projector-hero__actions">
          <Link
            href="/about"
            className="btn-primary px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm uppercase tracking-wider hover:bg-[#e8d48b]"
          >
            About the Project
          </Link>
          <Link
            href="/data-critique"
            className="btn-outline px-7 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-sm uppercase tracking-wider hover:bg-[#c9a84c]/10"
          >
            Data Critique
          </Link>
        </div>
      </div>
    </section>
  );
}
