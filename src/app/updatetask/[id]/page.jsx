"use client";
import FormContainer from "@/components/FormContainer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskId({ params }) {
  const [newTask, setNewTask] = useState({
    title: "Carregando...",
    description: "Carregando...",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(newTask),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    router.push("/");
  };

  const deleteTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  const getTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`);
    const data = await res.json();
    setNewTask({ title: data.title, description: data.description });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <main>
      <Header link="/newtask" text="+ Nova task" />
      <div className="px-4 h-[calc(100vh-8rem)] flex items-center">
        <div className="flex flex-col justify-center items-center space-y-8 border-2 md:w-[450px] m-auto p-8 md:p-12 rounded-md">
          <div className="flex justify-between w-full">
            <h1 className="text-4xl font-medium text-zinc-50 w-12 md:w-auto">
              Atualizar{" "}
              <span className="underline decoration-emerald-400">Task</span>
            </h1>
            <button
              onClick={deleteTask}
              className="border rounded-md bg-red-600 hover:bg-orange-600 w-8 h-8 p-0 md:hidden"
            >
              x
            </button>
            <button
              onClick={deleteTask}
              className="bg-red-600 px-2 py-1 rounded-md border items-start focus:items-center justify-center hover:bg-orange-600 hidden md:flex"
            >
              Excluir
            </button>
          </div>
          <FormContainer
            submit={handleSubmit}
            change={handleChange}
            inputValue={newTask.title}
            textareaValue={newTask.description}
            btn="Atualizar"
          />
        </div>
      </div>
    </main>
  );
}
