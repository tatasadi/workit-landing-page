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
import Card from '~/components/Card'

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
      <div className="-mt-8 flex flex-col items-center gap-10 bg-[url('/images/bg-cards.svg')] bg-cover bg-bottom bg-no-repeat p-4 pb-16 pt-[12rem] md:-mt-12 md:gap-12 md:px-24 md:pb-24 md:pt-[17rem] lg:-mt-16 lg:flex-row lg:pt-[23rem]">
        <Card
          number={1}
          title="Actionable insights"
          text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        />
        <Card
          number={2}
          title="Data-driven decisions"
          text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        />
        <Card
          number={3}
          title="Always affordable"
          text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        />
      </div>
      <div className="relative flex w-full flex-col items-center p-4 md:p-10 lg:p-40">
        <div className="relative mx-12 mt-24">
          <img src={imageFounder} alt="founder" className="md:w-1/2 lg:w-2/5" />
        </div>
        <div className="relative z-10 -mt-20 flex flex-col items-center gap-4 bg-dark p-8 text-white md:-mt-36 md:w-2/3 md:items-start md:self-end md:p-14 lg:-mt-48 lg:gap-8">
          <h2 className="font-fraunces text-[2rem] font-semibold leading-[3rem] lg:text-[3.5rem] lg:leading-[4rem]">
            Be the first to test
          </h2>
          <p className="mb-2 text-center leading-7 md:text-left lg:text-lg lg:leading-8">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our
            app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.
          </p>
          <button className="btn-primary">Apply for access</button>
          <img
            src={bgPattern3}
            alt="background pattern 3"
            className="absolute -bottom-28 right-0 hidden md:block lg:-bottom-20 lg:right-[4.5rem]"
          />
        </div>
        <img src={logoDark} alt="logo" className="mb-12 mt-16 w-28 md:mb-16 md:mt-20 lg:mb-20 lg:mt-32" />
        <div className="mb-16 flex gap-6">
          <img src={iconFacebook} alt="facebook" className="h-6 w-6" />
          <img src={iconTwitter} alt="twitter" className="h-6 w-6" />
          <img src={iconInstagram} alt="instagram" className="h-6 w-6" />
        </div>
      </div>
    </main>
  )
}
