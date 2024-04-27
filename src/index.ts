import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function insertUser(username : string, password:string, firstName:string, lastName: string){
    await prisma.user.create({
        data : {
            username,
            password,
            firstName,
            lastName
        }
    })
}

async function insertTodo (title: string, description: string, userId: number){
    await prisma.todo.create({
        data:{
            title: title,
            description: description,
            userId: userId
        }
    })
}

async function getTodosAndUserDetails(userId:number) {
    const response = await prisma.todo.findMany({
        where:{
            userId: userId
        },
        select:{
            id: true,
            title:true,
            description: true,
            user: true
        }
    })
    console.log("response:", response);
}

insertTodo("MERN_LEARN","Complete mern learning by this month", 1);
getTodosAndUserDetails(1);
