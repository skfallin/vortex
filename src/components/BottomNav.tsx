import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-5 rounded-full bg-white px-8 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_8px_24px_rgba(5,26,36,0.12),0_26px_56px_rgba(5,26,36,0.08),inset_0_1px_10px_rgba(255,255,255,0.9)]">
      <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
      <Button href="https://halaskastudio.com/./book" className="px-5 py-2 text-xs">
        Start a chat
      </Button>
    </div>
  );
}
