"use client";
import Header from "@/components/Header";
import TaskCard from "@/components/taskcard";
import { useEffect, useState } from "react";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Header link="/newtask" text="+ Nova task" />
      <main className="p-8">
        <div className="flex gap-4 flex-wrap justify-center">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </main>
    </>
  );
}
