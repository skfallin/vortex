import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const bookingUrl = 'https://halaskastudio.com/./book';

export function PricingSection() {
  const [ref, isInView] = useInViewAnimation<HTMLElement>();
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  return (
    <section ref={ref} id="pricing" className="w-full px-6 py-12">
      <div className="ml-auto grid gap-8 md:max-w-4xl md:grid-cols-2 md:justify-end">
        <article
          className={`rounded-[40px] bg-[#051A24] py-10 pl-10 pr-10 text-[#E0EBF0] shadow-[inset_0_2px_18px_rgba(255,255,255,0.15),0_14px_40px_rgba(5,26,36,0.16)] md:pr-24 ${animationClass}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="text-[22px] font-medium text-[#F6FCFF]">Monthly Partnership</h2>
          <p className="mt-6 leading-relaxed">
            A dedicated creative design team.
            <br />
            You work directly with Viktor.
          </p>
          <div className="mt-10">
            <p className="text-2xl text-[#F6FCFF]">$5,000</p>
            <p className="mt-1 text-sm text-[#E0EBF0]">Monthly</p>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <Button href={bookingUrl} variant="secondary">
              Start a chat
            </Button>
            <Button href={bookingUrl} variant="primary" className="bg-[#0D212C]">
              How it works
            </Button>
          </div>
        </article>
        <article
          className={`rounded-[40px] bg-white py-10 pl-10 pr-10 text-[#051A24] shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:pr-24 ${animationClass}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-[22px] font-medium">Custom Project</h2>
          <p className="mt-6 leading-relaxed text-[#051A24]/75">
            Fixed scope, fixed timeline.
            <br />
            Same team, same standards.
          </p>
          <div className="mt-10">
            <p className="text-2xl text-[#0D212C]">$5,000</p>
            <p className="mt-1 text-sm text-[#273C46]">Minimum</p>
          </div>
          <div className="mt-10">
            <Button href={bookingUrl} variant="tertiary">
              Start a chat
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
