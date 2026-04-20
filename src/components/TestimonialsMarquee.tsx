import { ReactNode } from "react";

interface TestimonialsMarqueeProps {
  children: ReactNode[];
  speed?: number; // seconds for one full loop
}

/**
 * Continuous right-to-left marquee. Pauses on hover.
 * Duplicates content to create a seamless loop.
 */
const TestimonialsMarquee = ({ children, speed = 40 }: TestimonialsMarqueeProps) => {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children.map((c, i) => (
          <div key={`a-${i}`} className="shrink-0 w-[85vw] sm:w-[420px]">
            {c}
          </div>
        ))}
        {children.map((c, i) => (
          <div key={`b-${i}`} className="shrink-0 w-[85vw] sm:w-[420px]" aria-hidden="true">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;