type HeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-baseline gap-8 md:gap-17 lg:gap-33 font-grotesk">
      <h2 className="text-sz-64 lg:text-[85px] leading-none tracking-wide uppercase">{title}</h2>
      <div className="w-1 h-1 lg:w-4 lg:h-4 bg-brand rounded-full"></div>
    </div>
  );
};
