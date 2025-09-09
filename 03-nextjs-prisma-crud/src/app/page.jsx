import {prisma} from '@/libs/prisma'
import { TaskLi1 } from '@/app/tasks/components/TaskLi1.jsx'
import { TaskLi2 } from '@/app/tasks/components/TaskLi2.jsx'

//* Metodo 1 - obtener tasks de la API
async function fetchTasks(){
  //@ Como este codigo se ejecuta antes de llegar al navegador se debe poner toda la URL
  const res = await fetch('http://localhost:3000/api/tasks') 

  const data = await res.json()

  return data
}

//* Metodo 2 - obtener tasks de la BD
async function fetchTasksFromBD(){
  const tasks = await prisma.task.findMany()

  return tasks
}


export default async function Home() {

  const tasksData = await fetchTasks()

  const tasksDataFromDB = await fetchTasksFromBD()

  return (
    <div>
      <h1>Metodo 1 Para obtener la data</h1>
      <TaskLi1 tasksData={tasksData}/>
      <hr />
      <hr />
      <hr />
      <TaskLi2 tasksDataFromDB={tasksDataFromDB}/>
    </div>
  );
}
