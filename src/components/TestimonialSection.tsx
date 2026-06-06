import { Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const imageUrl =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85';

export function TestimonialSection() {
  const [sectionRef, isInView] = useInViewAnimation<HTMLElement>();
  const imageRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  useEffect(() => {
    const image = imageRef.current;

    if (!image) {
      return;
    }

    let frame = 0;
    let active = false;

    const update = () => {
      frame = 0;
      const rect = image.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setOffset((clamped - 0.5) * 200);
    };

    const onScroll = () => {
      if (!active || frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) {
        update();
      }
    });

    observer.observe(image);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-2xl px-6 py-12 text-center">
      <Quote
        className={`mx-auto h-6 w-6 text-slate-900 ${animationClass}`}
        style={{ animationDelay: '0.1s' }}
      />
      <blockquote
        className={`mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px] ${animationClass}`}
        style={{ animationDelay: '0.2s' }}
      >
        I left <span className="font-mondwest">Apple</span> to build the studio I always wanted to
        work with
      </blockquote>
      <p
        className={`mt-6 text-sm italic text-[#273C46] ${animationClass}`}
        style={{ animationDelay: '0.3s' }}
      >
        Viktor Oddy
      </p>
      <div
        className={`mt-10 flex flex-wrap items-center justify-center gap-8 text-2xl font-medium text-slate-900 ${animationClass}`}
        style={{ animationDelay: '0.4s' }}
      >
        <span className="w-[80px]">Apple</span>
        <span className="w-[83px]">IDEO</span>
        <span className="w-[110px]">Polygon</span>
      </div>
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Chris Halaska"
        className={`mx-auto mt-12 w-full max-w-xs rounded-2xl shadow-lg ${animationClass}`}
        style={{ animationDelay: '0.5s', transform: `translateY(${offset}px)` }}
      />
    </section>
  );
}
