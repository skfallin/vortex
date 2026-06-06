import { CSSProperties, useRef, useState } from 'react';
import { Button } from './Button';
import { marqueeImages } from './Marquee';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type TrailImage = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
};

const avatarUrl =
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120';

export function PartnerSection() {
  const [ref, isInView] = useInViewAnimation<HTMLElement>();
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();

    if (now - lastSpawn.current < 80) {
      return;
    }

    lastSpawn.current = now;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = idRef.current + 1;
    idRef.current = id;

    const nextImage: TrailImage = {
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      rotation: Math.random() * 20 - 10,
      image: marqueeImages[id % marqueeImages.length],
    };

    setTrail((current) => [...current, nextImage]);
    window.setTimeout(() => {
      setTrail((current) => current.filter((item) => item.id !== id));
    }, 1000);
  };

  return (
    <section ref={ref} className="w-full px-6 py-12">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white py-48 text-center shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
        onMouseMove={handleMouseMove}
      >
        {trail.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className="pointer-events-none absolute h-24 w-36 animate-[trailFade_1000ms_ease-out_forwards] rounded-xl object-cover shadow-lg"
            style={{
              left: item.x,
              top: item.y,
              '--rotation': `${item.rotation}deg`,
            } as CSSProperties}
          />
        ))}
        <div className="relative z-10 px-6">
          <h2
            className={`mb-12 font-mondwest text-[48px] leading-none text-[#0D212C] md:text-[64px] lg:text-[80px] ${animationClass}`}
            style={{ animationDelay: '0.1s' }}
          >
            Partner with us
          </h2>
          <Button
            href="https://halaskastudio.com/./book"
            className={`gap-3 pl-3 ${animationClass}`}
            style={{ animationDelay: '0.2s' }}
          >
            <img src={avatarUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
            Start chat with Viktor
          </Button>
        </div>
      </div>
    </section>
  );
}
