import prisma from "../../../lib/prisma";

export async function GET(){
    const data= await prisma.post.findMany();
    return Response.json(data);
}
export async function POST(request: Request){
    const body=await request.json();
    const post = await prisma.post.create({
        data:{
            userId: body.userId,
            title: body.title,
            image: body.image,
            description: body.description,
            communityId: body.communityId
        }
    })
    
    return Response.json(body);
}