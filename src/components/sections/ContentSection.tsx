import { motion } from "motion/react"
import AnimatedLink from "@/components/AnimatedLink";

interface ContentSectionProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export default function ContentSection({title, description, image, reverse}: ContentSectionProps){
    return(
         <section className={`flex items-center gap-20 justify-between px-48 py-20 max-lg:justify-center max-lg:px-12 max-lg:flex-col  ${reverse ? "flex-row-reverse" : ""}`} >
            <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className="max-lg:hidden">
                <img src={image} alt="" />
            </motion.div>
            <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className="flex flex-col gap-8 w-[40%] max-lg:w-full">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-lg text-slate-600 font-extralight">{description}</p>
                <AnimatedLink className="text-indigo-500 "/>
            </motion.div>
        </section>
    )
}