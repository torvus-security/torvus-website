const steps = [
  "Client-side encrypt",
  "Policy sealing",
  "Oracles",
  "HSM/TEE key shares",
  "Release orchestrator",
  "Recipient portal",
];

export function ProvenanceDiagram() {
  return (
    <svg
      className="h-auto w-full max-w-4xl"
      viewBox="0 0 900 200"
      role="img"
      aria-label="Client-side encrypt to policy sealing, oracles, HSM/TEE key shares, release orchestrator, recipient portal"
    >
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(38, 97, 156, 0.15)" />
          <stop offset="100%" stopColor="rgba(26, 174, 159, 0.25)" />
        </linearGradient>
      </defs>
      {steps.map((label, index) => {
        const x = 60 + index * 130;
        return (
          <g key={label} transform={`translate(${x}, 70)`}>
            <rect
              width="140"
              height="60"
              rx="18"
              fill="url(#nodeGradient)"
              stroke="rgba(38, 97, 156, 0.4)"
              strokeWidth="1.5"
            />
            <text
              x="70"
              y="32"
              textAnchor="middle"
              fontFamily="Satoshi, system-ui"
              fontSize="14"
              fill="rgba(11, 18, 32, 0.85)"
            >
              {label}
            </text>
            {index < steps.length - 1 ? (
              <g transform="translate(140, 30)">
                <line
                  x1="0"
                  y1="0"
                  x2="70"
                  y2="0"
                  stroke="rgba(11, 18, 32, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                <polygon points="70,0 62,-4 62,4" fill="rgba(38, 97, 156, 0.65)" />
              </g>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
