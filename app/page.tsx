import Link from "next/link";
// import { prisma } from "@/db"
import { prisma } from "../db";
import { TodoItem } from "./components/Todoitem";

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await prisma.todo.findMany()

  
  return (
    <div>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl text-slate-300"> Todos </h1>
            <Link 
              className="border border-slate-300
              text-slate-300 px-2 py-1 rounded hover:bg-slate-700 
              focus-within:bg-slate-700 outline-none" href="/new">New</Link>
        </header>
        <ul className="p1-4">
          {todos.map(todo => (
            // <li key={todo.id}>{todo.title}</li>
            <TodoItem dey={todo.id} {...todo}/>
          ))}
        </ul>
    </div>
    )
}
