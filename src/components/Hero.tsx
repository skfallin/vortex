import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function Hero() {
  const [ref, isInView] = useInViewAnimation<HTMLElement>();
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  return (
    <section ref={ref} className="mx-auto max-w-[440px] px-6 pt-12 text-center md:pt-16">
      <p
        className={`mb-4 font-mondwest text-[32px] font-semibold tracking-tight text-[#051A24] md:text-[40px] lg:text-[44px] ${animationClass}`}
        style={{ animationDelay: '0.1s' }}
      >
        Viktor Oddy
      </p>
      <p
        className={`mb-2 font-mono text-xs text-[#051A24] md:text-sm ${animationClass}`}
        style={{ animationDelay: '0.2s' }}
      >
        The creative studio of Viktor Oddy
      </p>
      <h1
        className={`whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px] ${animationClass}`}
        style={{ animationDelay: '0.3s' }}
      >
        Build the <span className="font-mondwest">next wave</span>,
        <br />
        the <span className="font-mondwest">bold way.</span>
      </h1>
      <div
        className={`mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base ${animationClass}`}
        style={{ animationDelay: '0.4s' }}
      >
        <p>
          I spent seven years at Apple crafting products used by over a billion people. I founded
          Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
        </p>
        <p>
          The studio is deliberately small. I guide the creative vision on every project, backed by
          a veteran design crew that moves fast without cutting corners.
        </p>
        <p>Projects start at $5,000 per month.</p>
      </div>
      <div
        className={`mt-5 flex flex-col gap-3 md:mt-6 md:gap-4 sm:flex-row sm:justify-center ${animationClass}`}
        style={{ animationDelay: '0.5s' }}
      >
        <Button href="https://halaskastudio.com/./book">Start a chat</Button>
        <Button href="#projects" variant="secondary">
          View projects
        </Button>
      </div>
    </section>
  );
}
