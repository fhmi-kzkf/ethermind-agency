export function AiIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain neural network */}
      <circle cx="32" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="44" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="44" cy="44" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Connections */}
      <line x1="32" y1="20" x2="16" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="20" x2="48" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="32" x2="20" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="48" y1="32" x2="44" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="48" x2="32" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="44" y1="48" x2="32" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
      <line x1="32" y1="16" x2="32" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
      {/* Center pulse */}
      <circle cx="32" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <circle cx="32" cy="34" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function MvpIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rocket body */}
      <path
        d="M32 8C32 8 24 20 24 36C24 40 27 44 32 44C37 44 40 40 40 36C40 20 32 8 32 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Nose cone */}
      <path
        d="M29 16L32 10L35 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left fin */}
      <path
        d="M24 36L18 44L24 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right fin */}
      <path
        d="M40 36L46 44L40 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Window */}
      <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Exhaust */}
      <path
        d="M28 44L26 52"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M32 44L32 54"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M36 44L38 52"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToolsIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main gear */}
      <path
        d="M32 20C25.4 20 20 25.4 20 32C20 38.6 25.4 44 32 44C38.6 44 44 38.6 44 32C44 25.4 38.6 20 32 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" />
      {/* Gear teeth */}
      <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="48" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Diagonal teeth */}
      <line x1="14.1" y1="14.1" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="44.2" y1="44.2" x2="49.9" y2="49.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="49.9" y1="14.1" x2="44.2" y2="19.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19.8" y1="44.2" x2="14.1" y2="49.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function UiUxIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pen tool */}
      <path
        d="M38 10L54 26L32 48L16 52L20 36L38 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Pen nib */}
      <path
        d="M20 36L28 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Handle line */}
      <line x1="38" y1="10" x2="54" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Edit line */}
      <path
        d="M34 18L46 30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Design grid dots */}
      <circle cx="16" cy="52" r="2" fill="currentColor" opacity="0.4" />
      {/* Bezier curve */}
      <path
        d="M8 56Q16 40 24 56"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const categoryIcons: Record<string, React.FC<{ className?: string; size?: number }>> = {
  AI: AiIcon,
  MVP: MvpIcon,
  Tools: ToolsIcon,
  "UI/UX": UiUxIcon,
};
