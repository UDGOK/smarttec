interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`
        font-mono text-xs uppercase tracking-wider text-lime-400
        ${className}
      `}
    >
      [ {children} ]
    </span>
  );
}

export default SectionLabel;