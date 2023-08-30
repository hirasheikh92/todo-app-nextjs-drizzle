
import {
    Todo, NewTodo,todoTable,db
} from '@/lib/drizzle'
import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';


export async function GET(request: NextRequest) {
   
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial,Task varchar(255));`
        // const res = await client.sql`SELECT * FROM Todos`;
        const res = await db.select().from(todoTable)
        // console.log(res.rows.find((item)=>item.id === 1));
        
        return NextResponse.json({data:res}) 
    } catch (err) {
        console.log(( err as {message:string}) .message)
        return NextResponse.json({message:"semething went wrong" }) 
        
    }
   
}

export async function POST(request:NextRequest) {
    // const client = await db.connect();
    const req = await request.json();
    try {
        if (req.task) {
            
            // const res = await client.sql`INSERT INTO Todos(Task) VALUES(${req.task});`
            const res = db.insert(todoTable).values({
                task: req.task,
            }).returning();
            console.log(res)
            return NextResponse.json({message:"data added successfully" }) 
        }
        else {
            throw new Error("Task field is required")
        }
    } catch (error) {
        return NextResponse.json({ message:(error as { message: string }).message }) 
    }
}