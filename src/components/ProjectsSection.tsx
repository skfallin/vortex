import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    name: 'evr',
    description: 'Da idea iniziale a milioni raccolti per un prodotto AI web3',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Macchine Automatiche',
    description: 'Processi di automazione industriale resi più fluidi e leggibili',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Una piattaforma moderna per la gestione dei portafogli',
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
