import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://coreykogan.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const corePages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  try {
    const { allPost } = await getAllPosts();
    return [
      ...corePages,
      ...allPost.map((post) => ({
        url: `${siteUrl}${post.path.current}`,
        lastModified: new Date(post._createdAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ];
  } catch {
    return corePages;
  }
}
