import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

const internalLinks = [
  { label: 'Services', href: '#pricing' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#top' },
];

const externalLinks = [
  { label: 'x.com', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
];

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-10 px-6 py-12 md:flex-row">
      <div>
        <Button href="https://halaskastudio.com/./book">Start a chat</Button>
      </div>
      <div className="flex gap-12 text-[#051A24]">
        <ArrowUpRight className="mt-1 h-5 w-5" />
        <nav className="flex flex-col gap-3">
          {internalLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-base transition hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="flex flex-col gap-3">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-base transition hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
