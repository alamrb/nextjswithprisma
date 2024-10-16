import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "First Post",
    slug: "first-post",
    content: "This is the first blog post.",
    author: {
      connectOrCreate: {
        where: {
          email: "alamrb@gmail.com",
        },
        create: {
          email: "alamrb@gmail.com",
          password: "123456",
        },
      },
    },
  },

  // Add more posts as needed...
];

async function main() {
  console.log(`Start seeding ...`);
  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });

    console.log(`Created post with id:${newPost.id}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
