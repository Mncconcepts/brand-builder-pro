import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsCarouselProps {
  items: Testimonial[];
}

const TestimonialsCarousel = ({ items }: TestimonialsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate asset initialization/loading check for skeleton layout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Duplicate arrays to maintain seamless wrap transitions
  const marqueeRow1 = [...items, ...items];
  const marqueeRow2 = [...items, ...items].reverse();

  return (
    <div className="w-full relative">
      {/* ── MOBILE VIEW: Pure Edge-to-Edge Hardware-Accelerated Marquee ── */}
      <div className="block md:hidden relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden flex-col gap-6 select-none pointer-events-auto">
        
        {/* Row 1: Right to Left */}
        <div className="flex w-max marquee-container">
          <div className="flex gap-4 px-4 animate-marquee-left">
            {marqueeRow1.map((t, idx) => (
              <MarqueeCard key={`row1-${idx}`} t={t} isLoading={isLoading} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-max marquee-container pt-4 self-end">
          <div className="flex gap-4 px-4 animate-marquee-right">
            {marqueeRow2.map((t, idx) => (
              <MarqueeCard key={`row2-${idx}`} t={t} isLoading={isLoading} />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP & TABLET VIEW: Premium Standard Navigation Carousel ── */}
      <div className="hidden md:block">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((t, i) => (
              <CarouselItem
                key={`${t.name}-${i}`}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <blockquote className="bg-card/60 backdrop-blur-md border border-border/80 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative group group-hover:-translate-y-0.5">
                  <div className="absolute top-6 right-6 text-muted-foreground/10 group-hover:text-primary/15 transition-colors">
                    <Quote className="w-8 h-8 transform scale-x-[-1]" />
                  </div>
                  
                  {isLoading ? (
                    <div className="w-full space-y-3 mb-6 flex-1">
                      <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
                      <div className="h-4 bg-muted animate-pulse rounded w-full" />
                      <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-0.5 mb-4">
                        {Array(5).fill(0).map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-foreground/90 leading-relaxed mb-6 flex-1 text-sm font-normal">
                        "{t.quote}"
                      </p>
                    </div>
                  )}

                  <footer className="flex items-center gap-3 pt-4 border-t border-border/40 mt-auto">
                    {isLoading ? (
                      <div className="flex items-center gap-3 w-full animate-pulse">
                        <div className="w-9 h-9 rounded-full bg-muted" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-muted rounded w-1/2" />
                          <div className="h-2 bg-muted rounded w-1/3" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs text-muted-foreground uppercase shrink-0">
                          {t.name.charAt(0)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-display font-bold text-foreground text-sm truncate">{t.name}</p>
                          <p className="text-primary text-[11px] font-semibold tracking-wider uppercase mt-0.5 truncate">{t.role}</p>
                        </div>
                      </>
                    )}
                  </footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hardware Accelerated Styles Injection */}
      <style>{`
        @keyframes customMarqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes customMarqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: customMarqueeLeft 28s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: customMarqueeRight 28s linear infinite;
          will-change: transform;
        }
        /* CSS-driven pause control handles hovers and continuous active touches seamlessly */
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:active .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right,
        .marquee-container:active .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

/* ─── Premium Mobile Card Molecule with Integrated Skeleton Blocks ─── */
const MarqueeCard = ({ t, isLoading }: { t: Testimonial; isLoading: boolean }) => {
  return (
    <div className="w-[300px] shrink-0 bg-card/60 backdrop-blur-md border border-border/80 p-5 rounded-xl flex flex-col justify-between transition-all duration-200">
      {isLoading ? (
        <div className="space-y-2.5 mb-4 w-full animate-pulse">
          <div className="h-3 bg-muted rounded w-4/5" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-5/6" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-0.5 mb-3">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-foreground/90 text-xs leading-relaxed font-normal mb-4 line-clamp-4">
            "{t.quote}"
          </p>
        </div>
      )}

      <div className="flex items-center gap-2.5 pt-3 border-t border-border/40">
        {isLoading ? (
          <div className="flex items-center gap-2.5 w-full animate-pulse">
            <div className="w-7 h-7 rounded-full bg-muted" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 bg-muted rounded w-2/3" />
              <div className="h-2 bg-muted rounded w-1/3" />
            </div>
          </div>
        ) : (
          <>
            <div className="w-7 h-7 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-[10px] text-muted-foreground uppercase shrink-0">
              {t.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="font-display font-bold text-foreground text-xs truncate">{t.name}</p>
              <p className="text-primary text-[9px] font-medium tracking-wide uppercase truncate mt-0.5">{t.role}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;