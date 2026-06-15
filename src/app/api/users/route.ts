import prisma from "../../../lib/prisma";

export async function POST(request: Request){
    const body=await request.json();
    return Response.json(await prisma.user.create({
        data: {
            name:body.name,
            email: body.email,
            password: body.password
        }
    }))
}

export async function GET(){
    const data = await prisma.user.findMany();
    return Response.json(data);
}