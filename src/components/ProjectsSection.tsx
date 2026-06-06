import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
  const [ref, isInView] = useInViewAnimation<HTMLElement>();
  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';

  return (
    <article ref={ref} className={animationClass}>
      <div className="ml-20 md:ml-28">
        <h3 className="font-mondwest text-2xl font-semibold text-[#051A24] md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-[#051A24]/70 md:text-base">{project.description}</p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="mt-6 w-full rounded-2xl object-cover shadow-lg"
      />
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
