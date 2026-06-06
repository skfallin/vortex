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
        Vittorio Conti
      </p>
      <p
        className={`mb-2 font-mono text-xs text-[#051A24] md:text-sm ${animationClass}`}
        style={{ animationDelay: '0.2s' }}
      >
        Lo studio creativo di Vittorio Conti
      </p>
      <h1
        className={`whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px] ${animationClass}`}
        style={{ animationDelay: '0.3s' }}
      >
        Costruisci la <span className="font-mondwest">prossima onda</span>,
        <br />
        con <span className="font-mondwest">coraggio.</span>
      </h1>
      <div
        className={`mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base ${animationClass}`}
        style={{ animationDelay: '0.4s' }}
      >
        <p>
          Ho passato sette anni in Apple a progettare prodotti usati da oltre un miliardo di persone.
          Ho fondato Vortex Studio per portare la stessa qualità di pensiero agli innovatori che
          stanno costruendo ciò che verrà.
        </p>
        <p>
          Lo studio resta volutamente piccolo. Seguo la visione creativa di ogni progetto, affiancato
          da un team senior che lavora veloce senza sacrificare precisione e cura.
        </p>
        <p>I progetti partono da €5.000 al mese.</p>
      </div>
      <div
        className={`mt-5 flex flex-col gap-3 md:mt-6 md:gap-4 sm:flex-row sm:justify-center ${animationClass}`}
        style={{ animationDelay: '0.5s' }}
      >
        <Button href="https://halaskastudio.com/./book">Apri una conversazione</Button>
        <Button href="#projects" variant="secondary">
          Guarda i progetti
        </Button>
      </div>
    </section>
  );
}
