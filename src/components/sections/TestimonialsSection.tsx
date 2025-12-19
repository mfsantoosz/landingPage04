import { TestimonialsCard } from "@/components/TestimonialsCard";
import { motion } from "motion/react"

export default function TestimonialsSection() {

    const testimonialsData = [
        {
            id: "user 1",
            quote: "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
            author: "Diego Morata",
        },
        {
            id: "user 2",
            quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
            author: "Franklin Hicks",
        },
        {
            id: "user 3",
            quote: "Must have book for all, who want to be Product Designer or Interaction Designer.",
            author: "Esther Allison",
        }
    ]


    return (
        <section className="w-full h-[500px] px-48 py-20 flex flex-col items-center gap-24 bg-slate-100 max-lg:px-12 max-lg:gap-12 max-lg:h-screen max-lg:py-10">
            <h2 className="text-3xl text-slate-950 font-bold">What people say about us </h2>
            <div
                className="flex flex-col items-baseline justify-center gap-12">
                {testimonialsData.map((testimonial) => (
                    <TestimonialsCard quote={testimonial.quote} author={testimonial.author} key={testimonial.id} />
                ))}
            </div>
        </section>
    )
}