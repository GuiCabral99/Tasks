import { useEffect, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

export default function Modal(props) {
  if (props.isOpen) {
    const [newTask, setNewTask] = useState({
      title: "Carregando...",
      description: "Carregando...",
    });

    const getTask = async () => {
      const res = await fetch(`/api/tasks/${props.taskId}`);
      const data = await res.json();
      setNewTask({ title: data.title, description: data.description });
    };

    useEffect(() => {
      getTask();
    }, []);

    const handleChange = (e) => {
      setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await fetch(`/api/tasks/${props.taskId}`, {
        method: "PATCH",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });
    };

    const deleteTask = async () => {
      await fetch(`/api/tasks/${props.taskId}`, {
        method: "DELETE",
      });
    };

    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-zinc-950 bg-opacity-80 z-50">
        <div className="fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col justify-between bg-zinc-50 text-zinc-950 p-4 w-80 h-80 rounded-lg">
          <button
            onClick={props.closeModal}
            className="self-end border border-zinc-950 rounded-full w-8 h-8 font-semibold hover:bg-zinc-950 hover:text-zinc-50 transition"
          >
            X
          </button>
          <h1 className="text-4xl font-medium text-zinc-950">
            Atualizar{" "}
            <span className="underline decoration-emerald-400">Task</span>
          </h1>
          <div>
            <form
              onSubmit={handleSubmit}
              action="/"
              className="flex flex-col space-y-4 justify-center items-center text-white w-full"
            >
              <Input
                type="text"
                name="title"
                placeholder="Título"
                value={newTask.title}
                onChange={handleChange}
              />
              <Textarea
                name="description"
                placeholder="Descrição"
                value={newTask.description}
                onChange={handleChange}
              />

              <div className="flex justify-between w-full">
                <button
                  type="submit"
                  // onClick={props.closeModal}
                  className="bg-emerald-600 w-20 h-12 rounded-md"
                >
                  Salvar
                </button>
                <button
                  onClick={deleteTask}
                  className="bg-red-600 w-20 h-12 rounded-md"
                >
                  Excluir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
