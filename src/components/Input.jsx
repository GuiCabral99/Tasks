export default function Input(props) {
  return (
    <input
      {...props}
      className="p-2 outline-none rounded-md border-2 focus:border-emerald-400 bg-zinc-800 w-full break-words"
    />
  );
}
