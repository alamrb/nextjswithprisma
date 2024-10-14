import prisma from "@/app/lib/db";

// console.log(prisma)

const PostPageDetails = async ({ params } :{params:{id:string}}) => {

    const post = await prisma.post.findUnique({
        where: {
            id:params.id
        }
    });

  return (
      <main className='flex flex-col items-center gap-y-5 pt-24 text-center'>
          <h1 className="text-3xl font-semibold">{post?.title}</h1>
          <p>{ post?.content}</p>
          
    </main>
  )
}

export default PostPageDetails