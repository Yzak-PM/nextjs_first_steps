import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

//? GET
export async function GET(request, {params}){
    //* Obtener datos de la BD
    const taskData = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(taskData)
}

//? Actualizar
export async function PUT(request, {params}){
    const data = await request.json()
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })

    return NextResponse.json(taskUpdated)
}

//? Delete
export async function DELETE(request, {params}){
    try {
        const taskDeleted = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
    
        return NextResponse.json("Borrando tarea " + params.id)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}