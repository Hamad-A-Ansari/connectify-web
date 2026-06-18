interface PlayStoreBadgeProps {
  href: string;
}

export default function PlayStoreBadge({ href }: PlayStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Connectify on Google Play"
      className="inline-flex items-center gap-3 rounded-lg bg-accent px-6 py-3 min-h-[44px] text-white font-semibold transition-colors duration-200 hover:bg-accent-hover"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.2 12l2.498-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-xs opacity-80">Get it on</span>
        <span className="text-sm font-bold">Google Play</span>
      </span>
    </a>
  );
}
