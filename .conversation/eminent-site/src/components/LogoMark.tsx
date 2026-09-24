// NOTE: This is a stylized placeholder recreation of the wings + pen-nib mark,
// built from the brand kit's colors and description (eagle wings = prominence,
// pen nib = craft). It is NOT a pixel copy of the client's designed logo —
// the brand PDF only contained angled product mockups, no flat vector/PNG file.
// Swap this out for the real logo.svg / logo.png the moment the client sends one
// (see README "Outstanding from client").

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Eminent Signs & Craft Services mark"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M50 20 L14 40 L36 44 L20 58 L40 56 L30 72 L50 58 L70 72 L60 56 L80 58 L64 44 L86 40 Z"
          fill="#0171CE"
          opacity="0.95"
        />
        <path
          d="M50 20 L38 42 L50 58 L62 42 Z"
          fill="#FCB61A"
        />
        <rect x="47" y="30" width="6" height="34" rx="1.5" fill="#F4F7FB" />
        <path d="M50 64 L44 78 L56 78 Z" fill="#F4F7FB" />
      </g>
    </svg>
  );
}
