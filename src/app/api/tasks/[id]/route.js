import Task from "@/models/TaskModel";
import db from "@/services/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await db.connect();
    const task = await Task.findById(params.id);
    await db.disconnect();
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PATCH(req, { params }) {
  const { title, description } = await req.json();
  try {
    await db.connect();
    const updatedTask = await Task.findByIdAndUpdate(
      params.id,
      {
        title,
        description,
      },
      { new: true }
    );
    await db.disconnect();
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req, { params }) {
  try {
    await db.connect();
    const task = await Task.findByIdAndDelete(params.id);
    await db.disconnect();
    return NextResponse.json({ msg: "Task excluída", task: task });
  } catch (error) {
    return NextResponse.json(error);
  }
}
