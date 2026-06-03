// export default async function SubRedditPAge({ params }: { params: Promise<{name: string}>}){
//     const {name} = await params;
//     return (
//         <h1>this is {name}</h1>
//     )

// }

export default async function SubRedditPage({ params}: { params: Promise <{name: string}>}){
    const {name} = await params;
    return (
        <h1>this is {name}</h1>
    )
}