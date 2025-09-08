import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(){
    const tasks = await prisma.task.findMany()
    console.log(tasks)

    return NextResponse.json("Obtener tareas")
}

export function POST(){
    return NextResponse.json("Crear tareas")
}