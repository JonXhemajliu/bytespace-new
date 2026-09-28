
import Button from "./Button";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-6 text-white">
      <span className="text-heading-xs font-bold">ByteSpace</span>
      <ul className="flex gap-8 text-body-s">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-body-s">Sign In</button>
        <Button>Join Us</Button>
      </div>
    </nav>
  );
}