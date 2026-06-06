import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    quote: 'With very little guidance team delivered designs that were consistently spot on...',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'alexwu',
    role: 'Founder, Nexgate',
    quote: 'Viktor led the creation of our best fundraising deck to date!...',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    quote: 'Working with Viktor transformed our product vision...',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    quote: 'The design quality exceeded our expectations...',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    quote: 'Incredible work from start to finish...',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
];

const cardWidth = 427.5;
const gap = 24;

function QuoteMark() {
  return (
    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" aria-hidden="true">
      <path
        d="M0 17.6C0 8.4 5.8 2.4 14.1 0L15.8 4.1C10.9 6 8.2 9 7.8 13.1H15.2V28H0V17.6ZM18.2 17.6C18.2 8.4 24 2.4 32.3 0L34 4.1C29.1 6 26.4 9 26 13.1H33.4V28H18.2V17.6Z"
        fill="#0D212C"
      />
    </svg>
  );
}

export function TestimonialCarousel() {
  const [ref, isInView] = useInViewAnimation<HTMLElement>();
  const [index, setIndex] = useState(testimonials.length);
  const [paused, setPaused] = useState(false);
  const items = useMemo(() => [...testimonials, ...testimonials, ...testimonials], []);
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => setIndex((current) => current + 1), 3000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (index >= testimonials.length * 2) {
      const timer = window.setTimeout(() => setIndex(testimonials.length), 820);
      return () => window.clearTimeout(timer);
    }

    if (index <= 1) {
      const timer = window.setTimeout(() => setIndex(testimonials.length + 1), 820);
      return () => window.clearTimeout(timer);
    }
  }, [index]);

  const goPrevious = () => setIndex((current) => current - 1);
  const goNext = () => setIndex((current) => current + 1);

  return (
    <section ref={ref} className="w-full overflow-hidden px-6 py-20">
      <div
        className={`mb-10 flex flex-col gap-6 md:ml-auto md:max-w-4xl md:flex-row md:items-end md:justify-between ${animationClass}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          What <span className="font-mondwest">builders</span> say
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="h-5 w-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-sm font-medium text-[#051A24]">Clutch 5/5</span>
        </div>
      </div>
      <div
        className={`md:ml-auto md:max-w-4xl ${animationClass}`}
        style={{ animationDelay: '0.2s' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mb-6 flex gap-3">
          <button
            type="button"
            onClick={goPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 bg-white text-[#0D212C] transition hover:bg-slate-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20 bg-white text-[#0D212C] transition hover:bg-slate-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-visible">
          <div
            className="flex gap-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${index * (cardWidth + gap)}px)` }}
          >
            {items.map((item, itemIndex) => {
              const distance = Math.abs(itemIndex - index);

              return (
                <article
                  key={`${item.name}-${itemIndex}`}
                  className="shrink-0 rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition duration-[800ms] md:w-[427.5px] md:rounded-[40px] md:pl-10 md:pr-24"
                  style={{
                    width: 'min(calc(100vw - 48px), 427.5px)',
                    opacity: distance > 1 ? 0.35 : 1,
                    transform: distance > 1 ? 'scale(0.96)' : 'scale(1)',
                  }}
                >
                  <QuoteMark />
                  <p className="mt-8 text-base leading-relaxed text-[#0D212C]">{item.quote}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <img src={item.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-[#051A24]">{item.name}</p>
                      <p className="text-sm text-[#273C46]">-&gt; {item.role}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
