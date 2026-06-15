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

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

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

function SocialLink({
  icon: Icon,
  label,
  ...props
}: {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
  "aria-label": string;
}) {
  return (
    <Link
      className="group flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 transition hover:text-zinc-700 dark:hover:text-zinc-200"
      {...props}
    >
      <Icon className="h-5 w-5 fill-current" />
      <span className="sr-only sm:not-sr-only font-medium">{label}</span>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Section label (e.g. "SKILLS")
───────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default async function Home() {
  const allProjectPromise = getAllProjects();
  const allPostPromise = getAllPosts();
  const [{ allProject }, { allPost }] = await Promise.all([
    allProjectPromise,
    allPostPromise,
  ]);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <Container className="mt-9 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-20">

          {/* ── Portrait (right on desktop) ── */}
          <div className="flex justify-center lg:order-last lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-[380px]">
              {/* ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-sky-500/25 via-violet-500/10 to-red-500/20 blur-3xl"
              />
              <Image
                src="/images/portrait.png"
                alt="Corey Kogan"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl shadow-zinc-900/20 dark:shadow-black/60 ring-1 ring-zinc-900/10 dark:ring-white/10 object-cover"
                priority
              />
            </div>
          </div>

          {/* ── Bio (left on desktop) ── */}
          <div className="flex flex-col">
            {/* Name + title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block leading-[1.15] bg-gradient-to-r from-sky-500 via-violet-500 to-red-500 bg-[length:300%] bg-clip-text text-transparent gradient-text">
                Corey Kogan,
              </span>
              <span className="mt-1 block text-zinc-800 dark:text-zinc-100">
                Web Developer
              </span>
            </h1>

            {/* Bio */}
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I&apos;m Corey, a web developer based in{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                Philadelphia, PA
              </span>
              . I&apos;m passionate about building responsive and accessible web
              applications using the latest technologies in the industry.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <SocialLink
                href="https://twitter.com/coreykogan_"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                label="Twitter"
              />
              <SocialLink
                href="https://instagram.com/coreykogan"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                label="Instagram"
              />
              <SocialLink
                href="https://github.com/kogan007"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/corey-kogan-5159261b5/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                label="LinkedIn"
              />
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-zinc-800 text-white shadow-sm hover:bg-zinc-700 active:scale-95 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition duration-150"
              >
                {/* Download icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-70"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                My Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-700 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 active:scale-95 transition duration-150"
              >
                {/* Envelope icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </Link>
            </div>

            {/* ── Skills / Flow widget ── */}
            <div className="mt-10">
              <SectionLabel>Skills &amp; interests</SectionLabel>
              <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 shadow-sm h-72">
                <Flow />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ══════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════ */}
      <Container className="mt-20 md:mt-24">
        <div className="border-t border-zinc-100 dark:border-zinc-700/40" />
      </Container>

      {/* ══════════════════════════════════════
          ARTICLES + NEWSLETTER
      ══════════════════════════════════════ */}
      <Container className="mt-14 mb-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:max-w-none">

          {/* Articles */}
          <div>
            <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Latest writing
            </h2>
            <div className="flex flex-col gap-14">
              {allPost.map((post) => (
                <Article key={post._id} article={post} />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-10 xl:pl-16">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}
