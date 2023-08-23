"use client";
import { useState } from "react";
import Modal from "./Modal";

export default function TaskCard({ task }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        className="w-80 bg-zinc-800 text-zinc-100 flex flex-col space-y-2.5 min-h-[10rem] p-2.5 rounded-md border-2 border-emerald-600"
        onClick={() => setOpenModal(true)}
      >
        <ul className="pl-5 break-words">
          <li className="text-xl font-medium underline list-disc">
            {task.title}
          </li>
        </ul>
        <p className="break-words">{task.description}</p>
      </button>
      <Modal
        isOpen={openModal}
        closeModal={(openModal) => setOpenModal(!openModal)}
        taskId={task._id}
      />
    </div>
  );
}
