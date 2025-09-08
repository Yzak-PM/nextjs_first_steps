import { NextResponse } from "next/server";
console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET(){
    //* Extraer params
    //* query database
    //* communicate with other services

    const res = await fetch("https://dummyjson.com/products");
    // const res = await fetch(`https://dummyjson.com/products/${process.env.TOKEN}`);

    const productsData = await res.json();
    
    return NextResponse.json(productsData);
}

export async function POST(request){
    const data = await request.json();

    return NextResponse.json(data);
}

export function PUT(){
    return NextResponse.json({
        message: "Actualizando datos",
        status: "ok"
    });
}

export function DELETE(){
    return NextResponse.json({
        message: "Eliminando datos",
        status: "ok"
    });
}