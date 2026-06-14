import prisma from "../../../lib/prisma";

export async function POST(request: Request){
    const body=await request.json();
    return Response.json(await prisma.user.create({
        data: {
            name:body.name,
            email: body.email,
            password: body.password
        } //need to update
    }))
}