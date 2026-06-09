import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(`/blog/` + slug);
  if (!post) return notFound();
  return (
    <ArticleLayout meta={{ title: post.title, date: post._createdAt }}>
      <div>W.I.P</div>
    </ArticleLayout>
  );
}
