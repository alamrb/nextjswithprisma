"use server"


import prisma from "../lib/db"

export async function createPost(formData:FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string).replace(/\s+/g,"_").toLowerCase(),
            content: formData.get("content") as string,
            
        },
    })
}



// export async function createPost(formData: FormData) {
//     try {
//         await prisma.post.create({
//             data: {
//                 title: formData.get("title") as string,
//                 content: formData.get("content") as string,
//             },
//         });
//     } catch (error: any) {
//         console.error("Error creating post:", error.message);  // Log the error message
//         console.error("Full error object:", error);  // Log the full error object
//         throw new Error("Failed to create post");
//     }
// }