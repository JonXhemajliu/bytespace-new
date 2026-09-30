type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "lime" | "ghost";
};

export default function Button({ variant = "lime", className = "", ...props }: Props) {
  const styles =
    variant === "lime"
      ? "bg-electric-lime text-black"
      : "border border-white text-white";
  return (
    <button
      className={`rounded-full px-5 py-2 text-body-s font-medium ${styles} ${className}`}
      {...props}
    />
  );
}