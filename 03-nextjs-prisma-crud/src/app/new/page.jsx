'use client'
import {useRouter} from "next/navigation"

export default function NewPage() {

    const router = useRouter()

    //* Funcion que maneja el submit
    const handleSubmit = async(e) => {
        e.preventDefault()
        
        //* Obtener datos del formulario
        const title = e.target.title.value
        const description = e.target.description.value

        //* POST a la api para crear task
        const res = await fetch('/api/tasks', {
            method: 'POST', 
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        console.log('Tarea creada: ', data)

        router.push('/')
    }

    return (
        <div className="p-7">
            <form
                onSubmit={handleSubmit}
                className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="New task" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create Task</button>
            </form>
        </div>
    );
}