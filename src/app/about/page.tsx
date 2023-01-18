import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.png";

function SocialLink({ className, href, children, icon: Icon }: any) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About Me
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve been interested in coding and computers since I was
                just a small child. My parents had technical backgrounds, and I
                had a laptop since I was a kid. When I was 10 years old my mom,
                who worked as a web developer for Ebay at the time, explained to
                me how the DOM works.
              </p>
              <p>
                I started making websites in my free time from then. I was
                interested in creating virtual communities, and created a
                website for my friend&apos; minecraft server. In 8th grade I won
                the school&apos; science fair with a project I made with several
                friends - a personal assistant phone application, similar to
                Siri. We even charged other kids to add custom prompts and
                responses, and not long after our whole class had our app
                installed on their phones.
              </p>
              <p>
                My professional career in web development started at
                MakDigitalDesign. There I started with working on SEO, wordpress
                sites, and learning the ins and outs of the trade. Eventually I
                moved on to working with ecommerce businesses on Shopify and
                Bigcommerce, where I created custom themes using Liquid and
                Stencil.
              </p>
              <p>
                I found my passion in the trade when I learned more about
                frameworks like React and Vue. I worked on some hobby projects,
                and then brought my knowledge into my work, by creating custom
                React based components for the businesses I was working with.
                One of the most highly requested projects from that time period
                was a drag and drop into bigcommerce &quot;side cart&quot;, that
                pulls out from either the left or right, and allows for changing
                the quantity as well as product options from any page on the
                storefront.
              </p>
              <p>
                From there I&apos;ve moved onto my current line of work, which
                I&apos;m most excited about, and believe is the future of
                ecommerce - headless storefronts. This lead me into working with
                both front and backend code based around typescript, NodeJS, and
                React, as well as working with frameworks such as NextJS and
                RemixJS, the latter which I have become a huge supporter of.
              </p>
              <p>
                I&apos;m excited and highly motivated to learn more and work on
                a wider variety of projects, and leave my mark on the web. My
                mission is to encourage accessibility, create fast websites
                using progressive enhancement, and end the days of constant
                loading spinners while browsing content.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/coreykogan_"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/coreykogan"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/kogan007"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/corey-kogan-5159261b5/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:coreykogan@gmail.com"
                icon={MailIcon}
                className="border-zinc-100 mt-4 dark:border-zinc-700/40"
              >
                coreykogan@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
