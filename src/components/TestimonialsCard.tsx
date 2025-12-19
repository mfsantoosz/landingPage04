import { Quote } from "lucide-react";

interface TestimonialsCardProps {
    quote: string;
    author: string;
}


export const TestimonialsCard = ({ quote, author }: TestimonialsCardProps) => {
    return (
        <div className="flex flex-col justify-center gap-4 w-[50%]  text-justify max-lg:w-full ">
            <Quote color="#4f39f6" />
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg text-slate-950">{quote}</p>
                <p className="text-base font-extralight text-slate-600">{author}</p>
            </div>
        </div>
    )
}