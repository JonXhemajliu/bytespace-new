type Props = { label: string; active?: boolean };

export default function CategoryChip({ label, active }: Props) {
  return (
    <button
      className={`rounded-full px-4 py-1.5 text-body-xs ${
        active ? "bg-electric-lime font-medium" : "bg-gray-100 text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}