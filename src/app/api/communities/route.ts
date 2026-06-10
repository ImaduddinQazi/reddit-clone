import prisma from "../../../lib/prisma";

export async function GET(){
    const data = await prisma.community.findMany()

    return Response.json(data);
}