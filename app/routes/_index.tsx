import type { MetaFunction } from '@remix-run/node'
import logoDark from '../assets/images/logo-dark.svg'
import logoLight from '../assets/images/logo-light.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import imageFounder from '../assets/images/image-founder.webp'
import imageHero from '../assets/images/image-hero.webp'
import bgPattern1 from '../assets/images/bg-pattern-1.svg'
import bgPattern2 from '../assets/images/bg-pattern-2.svg'
import bgPattern3 from '../assets/images/bg-pattern-3.svg'

export const meta: MetaFunction = () => {
  return [{ title: 'Workit Landing Page' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="flex w-full max-w-7xl flex-col items-center">
      <div className="relative flex h-[30rem] w-full flex-col items-center bg-[url('/images/bg-hero.svg')] bg-cover bg-bottom bg-no-repeat px-4 py-8 text-white md:h-[33rem] md:px-10 md:py-8 lg:h-[45rem]">
        <div className="flex w-full justify-between">
          <img src={logoLight} alt="logo" className="w-36" />
          <button className="btn-secondary ml-auto">Apply for access</button>
        </div>
        <h1 className="heading-lg mb-6 mt-16 max-w-sm text-center md:my-14 md:max-w-[26rem] lg:max-w-xl">
          Data <span className="border-b-2 border-primary">tailored</span> to your needs.
        </h1>
        <button className="btn-primary">Learn more</button>
        <img
          src={bgPattern1}
          alt="background pattern 1"
          className="absolute -left-60 top-10 z-0 hidden md:block lg:-left-20 lg:top-20"
        />
        <img
          src={bgPattern2}
          alt="background pattern 2"
          className="absolute -right-20 bottom-20 z-0 hidden md:block lg:-right-10 lg:bottom-52"
        />
        <img
          src={imageHero}
          alt="hero"
          className="absolute -bottom-[6rem] z-10 h-[12rem] md:-bottom-[9rem] md:h-[18rem] lg:-bottom-[13rem] lg:h-[26rem]"
        />
      </div>
    </main>
  )
}

/* <img src={imageFounder} alt="logo" /> */

//<img src={bgPattern3} alt="background pattern 3" />
