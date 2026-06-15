import prisma from "../../../lib/prisma";

export async function GET(){
    const data= await prisma.post.findMany();
    return Response.json(data);
}
export async function POST(request: Request){
    const body = await prisma.post.create({
        data:{
            userId: prisma.userId,
            title: prisma.title,
            image: prisma.image,
            description: prisma.description,
            communityId: prisma.communityId
        }
    })
    
    return Response.json(body);
}