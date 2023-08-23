"use client";
import Header from "@/components/Header";
import TaskCard from "@/components/taskcard";
import { useEffect, useState } from "react";

export default function Tasklist() {
  const [tasks, setTasks] = useState([{ title: "Carregando..." }]);

  const getTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Header link="/newtask" text="+ Nova task" />
      <main className="p-8 flex justify-center m-auto">
        <div className="flex gap-4 flex-wrap mx-auto">
          {tasks.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
