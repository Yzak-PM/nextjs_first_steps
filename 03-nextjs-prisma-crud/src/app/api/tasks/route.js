import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(){
    //* Obtener todos los datos de la tabla
    const tasks = await prisma.task.findMany()

    return NextResponse.json(tasks)
}

export async function POST(request){
    //* Crear nuevo dato e insertar en la BD
    // const new_task_data = await request.json()
    const {title, description} = await request.json()

    const new_task = await prisma.task.create({
        data: {
            title: title,
            description: description
        }
    })

    return NextResponse.json(new_task)
}