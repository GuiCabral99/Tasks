"use client";
import FormContainer from "@/components/FormContainer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Task() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  };
  return (
    <main>
      <Header link="#" hidden="hidden" />
      <div className="px-4 h-[calc(100vh-8rem)] flex items-center">
        <div className="flex flex-col justify-center items-center space-y-8 border-2 md:w-96 m-auto p-8 md:p-12 rounded-md">
          <h1 className="text-4xl font-medium text-zinc-50">
            Nova <span className="underline decoration-emerald-400">Task</span>
          </h1>
          <FormContainer
            submit={handleSubmit}
            change={handleChange}
            btn="Salvar"
          />
        </div>
      </div>
    </main>
  );
}
