import AnimatedLink from "@/components/AnimatedLink";

export default function HeroSection() {
    return(
        <section className="flex items-center justify-between w-full h-[calc(100vh-96px)] px-48 bg-slate-900 max-lg:p-12 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:h-[calc(100vh-80px)] ">
          <div className="flex flex-col gap-8 w-[50%] max-lg:w-full max-lg:gap-4">
            <h1 className="text-white text-7xl font-bold max-lg:text-5xl">Get more visitors, get more sales.</h1>
            <p className="text-gray-300 text-xl font-extralight max-lg:text-base">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
           <AnimatedLink />
          </div>
          <div className="w-[40%] h-96 bg-gray-300 text-4xl font-bold p-12 flex items-center justify-center rounded-lg max-lg:w-full max-lg:h-56 max-lg:p-4">VIDEO</div>
        </section>
    )
}