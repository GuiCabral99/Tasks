"use client";
import Link from "next/link";

export default function TaskCard({ task }) {
  const deleteTask = async () => {
    const res = await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
      method: "DELETE",
    });
  };

  return (
    <Link
      href={`/updatetask/${task._id}`}
      className="w-80 bg-zinc-800 text-zinc-100 flex flex-col space-y-2.5 min-h-[10rem] p-2.5 rounded-md border-2 border-emerald-600"
    >
      <ul className="pl-5 break-words">
        <li className="text-xl font-medium underline list-disc">
          {task.title}
        </li>
      </ul>
      <p className="break-words">{task.description}</p>
    </Link>
  );
}

// "use client";
// import Link from "next/link";

// export default function TaskCard({ task }) {
//   const deleteTask = async () => {
//     const res = await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
//       method: "DELETE",
//     });
//   };

//   return (
//     <div className="w-80 bg-zinc-800 text-zinc-100 flex items-center justify-between h-40 p-2.5 rounded-md border-2 border-emerald-600">
//       <div className="space-y-4 h-full">
//         <h1 className="text-lg font-medium underline">{task.title}</h1>
//         <p>{task.description}</p>
//       </div>
//       <div className="flex flex-col h-full justify-between space-y-8 border-l border-emerald-600 pl-2.5">
//         <Link
//           href={`http://localhost:3000/updatetask/${task._id}`}
//           className="bg-orange-600 text-zinc-50 px-2 py-1 rounded-md border border-orange-300 flex items-start justify-center"
//         >
//           Editar
//         </Link>
//         <button
//           onClick={deleteTask}
//           className="bg-red-600 text-zinc-50 px-2 py-1 rounded-md border border-red-300 flex items-start justify-center"
//         >
//           Excluir
//         </button>
//       </div>
//     </div>
//   );
// }
