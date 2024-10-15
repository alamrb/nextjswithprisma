import Link from "next/link";
import { createPost } from "../actions/actions";
import prisma from "../lib/db";

// console.log(prisma)

const PostPage = async () => {
  const posts = await prisma.post.findMany({
    where: {
      // published:true,
      // title: {
      //   contains: "test",
      //   endsWith:"post"
      // }
    },
    orderBy: {
      createdAt: "desc",
    },
    // take: 1,
    // skip: 1,

    // select: {
    //   id: true,
    //   title: true,
    //   // slug:true,
    // }
  });

  // const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1>Home page change of content</h1>
      <h1 className="text-3xl font-semibold">All({posts.length})</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>

      <form
        action={createPost}
        // onSubmit={(event) => {

        // fetch('/api/posts', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     title:event?.target.title.value,
        //   })
        // })

        // }}
        className="flex flex-col gap-y-2 w-[300px]"
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          className="px-2 py-1 rounded-sm"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Contents"
          className="px-2 py-1 rounded-sm"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Crate Test
        </button>
      </form>
    </main>
  );
};

export default PostPage;
