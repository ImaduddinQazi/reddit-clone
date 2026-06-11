import { request } from "http";
import prisma from "../../../lib/prisma";

export async function GET(){
    const data = await prisma.community.findMany()

    return Response.json(data);
}

export async function POST(request: Request){
    const body=await request.json()

    const community= await prisma.community.create({
        data:{
            name:body.name,
            description: body.description,
            userId: body.userId
        }
    })
    return Response.json(community);
}