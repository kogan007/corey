import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import portrait from "@/images/portrait.png";
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
      <Container className="mt-9">
        <div className="max-w-7xl flex space-x-6 flex-wrap">
          <Image
            src={portrait}
            alt="Corey Kogan"
            width={600}
            height={600}
            className="rounded-2xl"
          />
          <div>
            <div className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              <h1 className="leading-[66px] bg-gradient-to-r from-sky-500 to-red-500 bg-[length:400%] bg-clip-text text-transparent gradient-text">
                Corey Kogan,
              </h1>
              <div>Web Developer</div>
            </div>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-sm">
              I&apos;m Corey, a web developer based in Philadelphia,
              Pennsylvania. I&apos;m passionate about building responsive and
              accessible web applications using the latest technologies in the
              web industry
            </p>
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
            <div className="space-x-2 mt-4 flex items-center">
              <div>
                <button className="rounded-md px-2 py-1 uppercase bg-gray-500 text-white text-sm font-medium hover:bg-gray-700 transition-all duration-150 ease-linear border border-gray-500 hover:border-gray-700">
                  My Resume
                </button>
              </div>
              <div>
                <button className="rounded-md px-2 py-1 uppercase bg-white text-gray-500 border border-gray-500 text-sm font-medium hover:border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 ease-linear">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Photos /> */}

      <Container className="mt-24 md:mt-28">
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

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === "production") {
//     await generateRssFeed();
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   };
// }
