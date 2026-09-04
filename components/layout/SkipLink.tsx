// Skip-to-main-content link. Hidden until keyboard focus reveals it; jumps
// past the fixed header to the first <main> element. Accessibility-mandatory.
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-[color:var(--color-primary)] focus:text-white focus:text-sm focus:font-medium focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2"
    >
      Skip to main content
    </a>
  )
}
