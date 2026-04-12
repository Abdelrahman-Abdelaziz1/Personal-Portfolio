export function GridBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center py-20">
        {/* Faded Mask */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 w-full">{children}</div>
      </div>
    );
  }