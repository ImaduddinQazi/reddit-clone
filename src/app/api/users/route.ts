export default async function POST(String email, String password, String name,){
    const data=await prisma.put();
    return Response.json({
        "message":"data added successfully"
    });
}