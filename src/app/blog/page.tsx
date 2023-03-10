import { Container } from "@/components/Container";
import { formatDate } from "@/lib/formatDate";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const { allPost } = await getAllPosts();
  return (
    <Container className="mt-12">
      <div className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl max-w-lg mb-12">
        A collection of my thoughts, ideas, and experiences throughout life, my
        career, and more.
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 h-full gap-6">
        {allPost.map((post) => (
          <div key={post._id} className="mb-6 flex flex-col">
            <Link href={post.path.current}>
              <Image
                src={post.postImage.asset.url}
                height={600}
                width={600}
                alt={post.title}
                className="max-h-40 h-full w-full"
              />
            </Link>
            <div className="bg-gray-200 py-4 px-10 h-full">
              <h5 className="text-center capitalize text-sm text-gray-400">
                {post.tags[0]}
              </h5>
              <Link href={post.path.current}>
                <h3 className="text-lg text-center font-medium">
                  {post.title}
                </h3>
              </Link>
              <div className="text-center w-full text-xs mt-1">
                <span>{formatDate(post._createdAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
