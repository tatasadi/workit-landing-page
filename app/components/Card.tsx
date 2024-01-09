export default function Card({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:flex-col">
      <div className="aspect-square w-12 rounded-full border border-gray px-4 py-1 text-center font-fraunces text-xl font-semibold leading-9 text-dark lg:w-14 lg:px-5 lg:py-2 lg:text-2xl lg:leading-10">
        {number}
      </div>
      <div>
        <h2 className="mb-4 mt-6 text-center font-fraunces text-[1.75rem] font-semibold leading-9 text-dark md:mt-0 md:text-left lg:mb-7 lg:mt-14 lg:text-center lg:text-[2rem] lg:leading-10">
          {title}
        </h2>
        <p className="text-center leading-7 text-gray md:text-left lg:text-center lg:text-lg lg:leading-8">{text}</p>
      </div>
    </div>
  )
}
