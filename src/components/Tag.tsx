interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-claude-terracotta/30 bg-claude-terracotta/10 px-3 py-1 text-sm font-medium text-claude-terracotta">
      {label}
    </span>
  );
}
