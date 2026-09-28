import { ShoppingBag } from "lucide-react";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
<nav className="mx-auto flex max-w-[1200px] items-center justify-between py-6 text-white">
          <span className="text-heading-xs font-bold">ByteSpace</span>
      <ul className="flex gap-8 text-body-s">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <div className="flex items-center gap-6 text-body-s">
        <button>Sign In</button>
        <button>Join Us</button>
        <ShoppingBag size={18} />
      </div>
    </nav>
  );
}