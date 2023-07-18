import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/allester-headshot-new.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function useIntersectionObserver(
	elementRef,
	{ threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) {
	const [entry, setEntry] = useState();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current;
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Allester Ramayrat - Software engineer, data science, python developer</title>
        <meta
          name="description"
          content="Allester Ramayrat - software engineer, data science, python developer, UCSB graduate, san jose california"
        />
      </Head>
      <div className="px-4 sm:px-12 md:px-18 lg:px-28 h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-4xl">
          <div className="animate-fade" style={{"animation-delay": "500ms", "animation-fill-mode": "both"}}>
            <h2 className="leading-tight text-teal-600 dark:text-teal-400">
              Hi, my name is
            </h2>
          </div>
          <div className="animate-fade" style={{"animation-delay": "600ms", "animation-fill-mode": "both"}}>
            <h1 className="mt-6 text-clamp font-bold leading-none tracking-tight text-zinc-800 dark:text-zinc-100">
              Allester Ramayrat.
            </h1>
          </div>
          
          <div className="animate-fade" style={{"animation-delay": "700ms", "animation-fill-mode": "both"}}>
            <h1 className="mt-6 text-clamp font-bold leading-none tracking-tight text-zinc-800 dark:text-zinc-400" >
              I build things from data.
            </h1>
          </div>
          <div className="animate-fade" style={{"animation-delay": "800ms", "animation-fill-mode": "both"}}>
            <p className="mt-6 text-base max-w-screen-sm text-zinc-600 dark:text-zinc-400">
              I’m a data scientist specializing in generating powerful insights driven by data. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <div className="animate-fade" style={{"animation-delay": "900ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://github.com/allester"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
            </div>
            <div className="animate-fade" style={{"animation-delay": "1000ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://linkedin.com/in/allester/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
            <div className="animate-fade" style={{"animation-delay": "1100ms", "animation-fill-mode": "both"}}>
              <SocialLink
                href="https://instagram.com/allesterramayrat/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            </div>
            {/*<SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />*/}
          </div>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate-fade" animateOnce="true">
        <Container id="about" className="mt-16 sm:mt-32">
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
                About Me <br /> I'm Allester, your next Data Scientist.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Thank you for taking the time to read my background. I have always been interested in problem solving especially in the context of data science, analytics, and/or machine learning. At the moment, I am also exploring topics on large language model applications.  I am also an avid painter and dancer.</p>

              <p>I was born and raised in the Bay Area. I currently reside in downtown San Jose. I developed an interest in computers and gaming at an early age, starting with MMORPG World of Warcraft. I attended UC Santa Barbara, earning my bachelor’s degree in statistics and data science last Spring (June 2023).</p>

              <p>While pursuing my degree, I worked in a part-time capacity as a Junior Data Scientist for Vintra (acq. by Alarm.com) where I worked on creating KPI dashboards for the product and sales team. The highlight of my work at Vintra was when I presented a dashboard I built as a product feature to one of the execs at a large social media company. That was a great experience.</p>

              <p>I love to explore new technologies and challenges. I am eager to learn new things and improve my developer skills. I am looking to join a product engineering team as a technical Data Scientist or Software Engineer - Python developer.</p>
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <SocialLink href="https://github.com/allester" icon={GitHubIcon} className="mt-4">
                  Code work on GitHub
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/allester" icon={LinkedInIcon} className="mt-4">
                  My profile on LinkedIn
                </SocialLink>
                <SocialLink href="https://twitter.com/allester" icon={TwitterIcon} className="mt-4">
                  Connect with me on Twitter
                </SocialLink>
                <SocialLink href="mailto:allester@ramayrat.com" icon={MailIcon} className="mt-4">
                Contact me via e-mail
                </SocialLink>
                <SocialLink
                  href="https://docs.google.com/document/d/1kY6UxCejPVzf7jLrRzyUh4bV4sMTeHCWSfrHjc2daes/edit?usp=sharing"
                  icon={BriefcaseIcon}
                  target="_blank"
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                >
                  Download my CV
                </SocialLink>
              </ul>
            </div>
          </div>
        </Container>
      </AnimationOnScroll>
    </>
  )
}
