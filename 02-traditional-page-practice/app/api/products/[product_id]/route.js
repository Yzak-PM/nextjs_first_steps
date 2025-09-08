import { NextResponse } from "next/server";

export async function GET(request, {params}){

    const { searchParams } = new URL(request.url)
    console.log(searchParams.get("id"));
    console.log(searchParams.get("title"));

    const res = await fetch(`https://dummyjson.com/products/${params.product_id}`);

    const productData = await res.json();

    return NextResponse.json(productData);
}