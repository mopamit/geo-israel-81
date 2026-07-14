export default function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <svg viewBox="0 0 720 360" role="img">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eaf8fd" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dce8a2" />
            <stop offset="100%" stopColor="#6db580" />
          </linearGradient>
          <linearGradient id="desert" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5e6b8" />
            <stop offset="100%" stopColor="#d8b26a" />
          </linearGradient>
        </defs>

        <rect width="720" height="360" rx="28" fill="url(#sky)" />
        <circle cx="624" cy="68" r="36" fill="#fff6c9" />

        <path
          d="M70 302 C125 232 164 224 218 256 C267 285 316 235 361 255 C425 284 476 206 539 236 C590 260 638 226 710 248 L710 360 L45 360 Z"
          fill="url(#land)"
        />
        <path
          d="M0 295 C82 258 122 269 176 296 C226 321 302 291 352 314 L352 360 L0 360 Z"
          fill="url(#desert)"
        />
        <path
          d="M170 274 C194 242 217 214 242 192 C270 168 291 160 309 157 C288 198 297 233 320 269"
          fill="#91c269"
        />
        <path
          d="M231 201 L273 126 L311 198 Z"
          fill="#637840"
        />
        <path
          d="M254 164 L273 126 L289 160 Z"
          fill="#f6f7fb"
        />
        <path
          d="M303 280 C338 257 360 239 383 215 C401 196 425 173 450 165"
          fill="none"
          stroke="#2badde"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M307 280 C340 257 361 239 384 215 C402 196 426 173 450 165"
          fill="none"
          stroke="#ffffff"
          strokeOpacity=".65"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <g fill="#ffffff" stroke="#21739e" strokeWidth="2">
          <rect x="438" y="234" width="31" height="45" rx="3" />
          <rect x="473" y="215" width="34" height="64" rx="3" />
          <rect x="511" y="228" width="32" height="51" rx="3" />
        </g>
        <g fill="#21739e">
          <rect x="446" y="243" width="5" height="6" />
          <rect x="456" y="243" width="5" height="6" />
          <rect x="482" y="225" width="5" height="6" />
          <rect x="493" y="225" width="5" height="6" />
          <rect x="520" y="238" width="5" height="6" />
          <rect x="531" y="238" width="5" height="6" />
        </g>

        <g transform="translate(92 240)">
          <rect x="0" y="0" width="8" height="52" rx="4" fill="#4d8879" />
          <path d="M4 0 C-20 3 -29 17 -29 17 C-12 17 -2 13 4 0 Z" fill="#6db580" />
          <path d="M4 0 C28 3 37 17 37 17 C20 17 10 13 4 0 Z" fill="#6db580" />
          <path d="M4 10 C-18 13 -26 28 -26 28 C-10 27 0 23 4 10 Z" fill="#6db580" />
          <path d="M4 10 C24 13 32 28 32 28 C17 27 8 23 4 10 Z" fill="#6db580" />
        </g>

        <g transform="translate(575 212)">
          <path d="M0 0 L20 22 L-20 22 Z" fill="#637840" />
          <path d="M0 12 L26 40 L-26 40 Z" fill="#637840" />
          <rect x="-4" y="40" width="8" height="25" rx="2" fill="#4d8879" />
        </g>

        <path
          d="M125 85 C225 104 293 91 372 124 C446 155 517 125 610 166"
          fill="none"
          stroke="#14365e"
          strokeWidth="3"
          strokeDasharray="10 12"
          strokeLinecap="round"
          opacity=".3"
        />

        {[
          [125, 85, '#14365e'],
          [250, 99, '#6db580'],
          [375, 126, '#b0bd21'],
          [492, 139, '#2badde'],
          [610, 166, '#21739e']
        ].map(([x, y, color], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path
              d="M0 0 C-14 0 -24 10 -24 23 C-24 42 0 61 0 61 C0 61 24 42 24 23 C24 10 14 0 0 0 Z"
              fill={color}
              stroke="#ffffff"
              strokeWidth="4"
            />
            <circle cx="0" cy="22" r="8" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );
}
