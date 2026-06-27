interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`
        font-mono text-xs uppercase tracking-wider text-[#6E7079]
        ${className}
      `}
    >
      [ {children} ]
    </span>
  );
}

export default SectionLabel;
