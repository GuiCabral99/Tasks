export default function Textarea(props) {
  return (
    <textarea
      rows="3"
      {...props}
      className="w-full p-2 outline-none rounded-md min-h-[60px] max-h-[120px] border-2 focus:border-emerald-400 bg-zinc-800 break-words"
    ></textarea>
  );
}
