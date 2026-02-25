interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-primary/40" />
      <span className="font-fira text-xs font-medium uppercase tracking-[0.15em] text-primary">
        {label}
      </span>
      <div className="h-px w-8 bg-primary/40" />
    </div>
  );
};

export default SectionLabel;
