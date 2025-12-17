import AnimatedLink from "@/components/AnimatedLink";

export default function HeroSection() {
    return(
        <section className="flex items-center justify-between w-full h-[calc(100vh-96px)] px-48 bg-slate-900 max-md:p-12 max-md:flex-col max-md:justify-center max-md:gap-8 max-md:h-[calc(100vh-80px)] ">
          <div className="flex flex-col gap-8 w-[50%] max-md:w-full max-md:gap-4">
            <h1 className="text-white text-7xl font-bold max-md:text-5xl">Get more visitors, get more sales.</h1>
            <p className="text-gray-300 text-xl font-extralight max-md:text-base">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
           <AnimatedLink />
          </div>
          <div className="w-[40%] h-96 bg-gray-300 text-4xl font-bold p-12 flex items-center justify-center rounded-lg max-md:w-full max-md:h-56 max-md:p-4">VIDEO</div>
        </section>
    )
}