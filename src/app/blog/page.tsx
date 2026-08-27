import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { formatDate } from "@/lib/formatDate";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const { allPost } = await getAllPosts();
  const [featuredPost, ...remainingPosts] = allPost;

  return (
    <main className="blog-page">
      <Container>
        <header className="blog-page__header">
          <p className="eyebrow">THE NOTEBOOK / {String(allPost.length).padStart(2, "0")} ENTRIES</p>
          <h1>Notes from the workbench.</h1>
          <p>Thoughts on building for the web, growing communities, and the decisions that make a digital experience feel considered.</p>
        </header>

        {featuredPost && (
          <Link href={featuredPost.path.current} className="blog-featured">
            <div className="blog-featured__image">
              <Image src={featuredPost.postImage.asset.url} alt="" fill priority sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="blog-featured__content">
              <p className="eyebrow">LATEST NOTE <span>·</span> {formatDate(featuredPost._createdAt)}</p>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.shortDesc}</p>
              <span className="text-link">Read the note <i aria-hidden="true">↗</i></span>
            </div>
          </Link>
        )}

        {remainingPosts.length > 0 && (
          <section className="blog-list" aria-label="More writing">
            <div className="blog-list__heading"><p className="eyebrow">MORE FROM THE NOTEBOOK</p><span>{remainingPosts.length} entries</span></div>
            <div className="blog-list__grid">
              {remainingPosts.map((post, index) => (
                <Link href={post.path.current} className="blog-card" key={post._id}>
                  <div className="blog-card__image">
                    <Image src={post.postImage.asset.url} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" />
                    <span>0{index + 2}</span>
                  </div>
                  <div className="blog-card__content">
                    <p>{post.tags?.[0] ?? "Notebook"} <i>·</i> {formatDate(post._createdAt)}</p>
                    <h2>{post.title}</h2>
                    <span>Read note <i aria-hidden="true">↗</i></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
