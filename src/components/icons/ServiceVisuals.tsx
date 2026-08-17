"use client";

export function AiVisualPreview() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[4/3] bg-carbon rounded-xl overflow-hidden border border-ice-cyan/10 group-hover:border-ice-cyan/30 transition-all duration-500 flex items-center justify-center p-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-ice-cyan/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <svg
        className="w-full h-full text-ice-cyan/60 group-hover:text-ice-cyan transition-colors duration-500"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle grid background */}
        <pattern id="ai-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
        <rect width="240" height="140" fill="url(#ai-grid)" />

        {/* Neural Network Nodes */}
        <g className="transition-transform duration-700 group-hover:scale-105 origin-center">
          {/* Connection lines */}
          <line x1="60" y1="70" x2="110" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="60" y1="70" x2="110" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="110" y1="40" x2="170" y2="55" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="110" y1="100" x2="170" y2="55" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="110" y1="40" x2="110" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

          {/* Central AI Pulse Ring */}
          <circle cx="110" cy="70" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" className="animate-spin-slow" />
          <circle cx="110" cy="70" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Glowing Nodes */}
          <circle cx="60" cy="70" r="6" fill="#020203" stroke="currentColor" strokeWidth="2" />
          <circle cx="110" cy="40" r="5" fill="#020203" stroke="currentColor" strokeWidth="2" />
          <circle cx="110" cy="100" r="5" fill="#020203" stroke="currentColor" strokeWidth="2" />
          <circle cx="170" cy="55" r="7" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />

          {/* Inner dots */}
          <circle cx="60" cy="70" r="2" fill="currentColor" />
          <circle cx="170" cy="55" r="3" fill="currentColor" />
          <circle cx="110" cy="70" r="4" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

export function MvpVisualPreview() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[4/3] bg-carbon rounded-xl overflow-hidden border border-ice-cyan/10 group-hover:border-ice-cyan/30 transition-all duration-500 flex items-center justify-center p-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ice-cyan/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <svg
        className="w-full h-full text-ice-cyan/60 group-hover:text-ice-cyan transition-colors duration-500"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Browser Wireframe Frame */}
        <rect x="20" y="15" width="200" height="110" rx="8" fill="#020203" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Header bar */}
        <line x1="20" y1="35" x2="220" y2="35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="32" cy="25" r="2.5" fill="currentColor" fillOpacity="0.4" />
        <circle cx="42" cy="25" r="2.5" fill="currentColor" fillOpacity="0.4" />
        <circle cx="52" cy="25" r="2.5" fill="currentColor" fillOpacity="0.4" />

        {/* Wireframe Hero & UI Blocks */}
        <g className="transition-transform duration-700 group-hover:scale-105 origin-center">
          {/* Card 1 */}
          <rect x="32" y="48" width="80" height="30" rx="4" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="40" y1="58" x2="80" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="40" y1="66" x2="95" y2="66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />

          {/* Card 2 */}
          <rect x="120" y="48" width="88" height="62" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="164" cy="72" r="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />

          {/* Fast Launch Arrow */}
          <path d="M40 95 L55 95 M50 90 L55 95 L50 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="62" y="90" width="40" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

export function ToolsVisualPreview() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[4/3] bg-carbon rounded-xl overflow-hidden border border-ice-cyan/10 group-hover:border-ice-cyan/30 transition-all duration-500 flex items-center justify-center p-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-bl from-ice-cyan/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <svg
        className="w-full h-full text-ice-cyan/60 group-hover:text-ice-cyan transition-colors duration-500"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Workflow Diagram & API Pipeline */}
        <g className="transition-transform duration-700 group-hover:scale-105 origin-center">
          {/* Node 1 */}
          <rect x="30" y="50" width="48" height="40" rx="6" fill="#020203" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M42 64 L66 64 M42 74 L58 74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

          {/* Connecting data stream */}
          <path d="M78 70 L112 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
          <circle cx="95" cy="70" r="3" fill="currentColor" />

          {/* Central Processor Node */}
          <rect x="112" y="40" width="56" height="60" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="140" cy="70" r="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M136 70 L144 70 M140 66 L140 74" stroke="currentColor" strokeWidth="1.5" />

          {/* Connecting line to output */}
          <path d="M168 70 L198 70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Node 3 */}
          <circle cx="204" cy="70" r="8" fill="#020203" stroke="currentColor" strokeWidth="2" />
          <circle cx="204" cy="70" r="3" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

export function UiUxVisualPreview() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[4/3] bg-carbon rounded-xl overflow-hidden border border-ice-cyan/10 group-hover:border-ice-cyan/30 transition-all duration-500 flex items-center justify-center p-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tl from-ice-cyan/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <svg
        className="w-full h-full text-ice-cyan/60 group-hover:text-ice-cyan transition-colors duration-500"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Canvas & Measurement Grid */}
        <rect x="25" y="20" width="190" height="100" rx="6" fill="#020203" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />

        <g className="transition-transform duration-700 group-hover:scale-105 origin-center">
          {/* Design Component Box with bounding box handles */}
          <rect x="55" y="40" width="130" height="60" rx="4" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Bounding box corner handles */}
          <rect x="52" y="37" width="6" height="6" fill="#020203" stroke="currentColor" strokeWidth="1.5" />
          <rect x="182" y="37" width="6" height="6" fill="#020203" stroke="currentColor" strokeWidth="1.5" />
          <rect x="52" y="97" width="6" height="6" fill="#020203" stroke="currentColor" strokeWidth="1.5" />
          <rect x="182" y="97" width="6" height="6" fill="#020203" stroke="currentColor" strokeWidth="1.5" />

          {/* Measurement guides */}
          <line x1="55" y1="28" x2="185" y2="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <text x="110" y="25" fill="currentColor" fontSize="8" textAnchor="middle" opacity="0.6">130px</text>

          {/* Cursor tool */}
          <path d="M140 75 L152 90 L145 92 L140 75Z" fill="currentColor" stroke="#020203" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

export const serviceVisualPreviews = [
  AiVisualPreview,
  MvpVisualPreview,
  ToolsVisualPreview,
  UiUxVisualPreview,
];
