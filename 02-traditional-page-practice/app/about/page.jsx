"use client"
import {useRouter} from "next/navigation";

export default function AboutPage(){
    const router = useRouter();

    return(
        <div>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea sit ullam unde excepturi harum dignissimos blanditiis asperiores quae maiores quis recusandae amet iure, repudiandae neque necessitatibus, ipsum officia reprehenderit atque quisquam hic nisi ratione! Rem eaque sint tenetur repellendus.</p>
        
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
                    onClick={() => {
                        
                        router.push("/")
                    }}>
                Home
            </button>
        </div>
    )
}