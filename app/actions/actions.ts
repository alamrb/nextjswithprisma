"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "_")
        .toLowerCase(),
      content: formData.get("content") as string,
      author: {
        connect: {
          email: "alamrb@gmail.com",
        },
      },
    },
  });
  revalidatePath("/posts");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "_")
        .toLowerCase(),
      content: formData.get("content") as string,
    },
  });
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}
