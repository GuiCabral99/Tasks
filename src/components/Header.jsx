import Link from "next/link";

export default function Header({ link, text, hidden }) {
  return (
    <header className="px-4 h-20 bg-zinc-800 md:px-12 flex items-center justify-between">
      <Link href="/" className="text-4xl underline decoration-emerald-400">
        Tasks
      </Link>
      <Link
        href={link}
        className={`text-xl md:text-2xl border border-emerald-400 rounded-md p-1 ${hidden}`}
      >
        {text}
      </Link>
    </header>
  );
}
