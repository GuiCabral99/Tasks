import Link from "next/link";

export default function Header({ link, text }) {
  return (
    <header className="h-20 bg-zinc-800 px-12 flex items-center justify-between">
      <Link href="/" className="text-4xl underline decoration-emerald-400">
        Tasks
      </Link>
      <Link href={link} className="text-2xl">
        {text}
      </Link>
    </header>
  );
}
