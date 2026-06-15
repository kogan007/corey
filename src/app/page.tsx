import Image from "next/image";

import Link from "next/link";
import Flow from "@/components/Flow";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import { formatDate } from "@/lib/formatDate";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts, PostSnipppet } from "@/lib/posts";
import Newsletter from "@/components/Newsletter";

function Article({ article }: { article: PostSnipppet }) {
  return (
    <Card as="article">
      <Card.Title href={`${article.path.current}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article._createdAt} decorate>
        {formatDate(article._createdAt)}
      </Card.Eyebrow>
      <Card.Description>{article.shortDesc}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default async function Home() {
  const allProjectPromise = getAllProjects();
  const allPostPromise = getAllPosts();
  const [{ allProject }, { allPost }] = await Promise.all([
    allProjectPromise,
    allPostPromise,
  ]);

  return (
    <>
      {/* ── Hero ── */}
      <Container className="mt-9 sm:mt-16">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-16">

          {/* Portrait — right column on large screens */}
          <div className="flex justify-center lg:order-last lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-full lg:max-w-sm">
              {/* decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-sky-500/30 to-red-500/25 blur-3xl"
              />
              <Image
                src="/images/portrait.png"
                alt="Corey Kogan"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl shadow-zinc-800/20 dark:shadow-black/60 ring-1 ring-zinc-900/10 dark:ring-white/10"
                priority
              />
            </div>
          </div>

          {/* Bio — left column */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block leading-[1.2] bg-gradient-to-r from-sky-500 to-red-500 bg-[length:400%] bg-clip-text text-transparent gradient-text">
                Corey Kogan,
              </span>
              <span className="mt-1 block text-zinc-800 dark:text-zinc-100">
                Web Developer
              </span>
            </h1>

            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-md">
              I&apos;m Corey, a web developer based in Philadelphia,
              Pennsylvania. I&apos;m passionate about building responsive and
              accessible web applications using the latest technologies in the
              web industry.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://twitter.com/coreykogan_"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://instagram.com/coreykogan"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com/kogan007"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/corey-kogan-5159261b5/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-zinc-800 text-white shadow-sm hover:bg-zinc-700 active:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors duration-150"
              >
                My Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-700 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-150"
              >
                Contact Me
              </Link>
            </div>

            {/* Interactive slides */}
            <div className="mt-8">
              <Flow />
            </div>
          </div>
        </div>
      </Container>

      {/* ── Articles + Newsletter ── */}
      <Container className="mt-24 md:mt-28 mb-6">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {allPost.map((post) => (
              <Article key={post._id} article={post} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}
