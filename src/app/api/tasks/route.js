import Task from "@/models/TaskModel";
import db from "@/services/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db.connect();
    const tasks = await Task.find();
    await db.disconnect();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await db.connect();
    const newTask = await Task.create({ title, description });
    await db.disconnect();
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE() {
  try {
    await db.connect();
    await Task.deleteMany();
    await db.disconnect();
    return NextResponse.json({ msg: "Todas as tasks foram escluídas" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
