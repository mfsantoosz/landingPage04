import { Check, X } from "lucide-react";
import DefaultButton from "./DefaultButton";

export interface PricingCardProps {
    // prices: {
    //     starter: string;
    //     standard: string;
    //     premium: string;
    // };
    pricingTitle: string;
    prices: number;
    period: string;
    billingText: string;
    pricingDescription: string[];
    pricingNoIncludes?: string[];
    isActive?: any;
}

export const PricingCard = ({ pricingTitle, prices, period, billingText, pricingDescription, pricingNoIncludes, isActive = true }: PricingCardProps) => {
    return (
        <div className={`bg-white rounded-2xl py-8 px-10 border flex flex-col gap-6 h-[600px] w-full max-w-sm transition-all duration-500 ease-in-out max-lg:px-8 max-lg:py-5 max-lg:h-[500px] max-lg:gap-4 ${isActive ? "border-indigo-600 shadow-lg  shadow-indigo-300 opacity-100" : "border-slate-400 scale-95 opacity-50"} `}>
            <span className="text-indigo-600 font-bold text-xs mb-6 max-lg:mb-0 ">{pricingTitle}</span>
            <div className="flex flex-col gap-2">
                <h2 className="text-5xl font-bold text-slate-950">${prices}<span className="text-lg font-normal"> / {period}</span></h2>
                <p className="text-sm font-extralight text-slate-600">{billingText}</p>
            </div>
            <ul className="flex flex-col gap-4">
                {pricingDescription.map((value, index) => (
                    <li className="flex items-center gap-2" key={index}>
                        <Check className="text-green-400" />
                        <span className="text-lg font-extralight text-slate-950 max-lg:text-base">{value}</span>
                    </li>
                ))}
                {pricingNoIncludes && pricingNoIncludes.map((value, index) => (
                    <li className="flex items-center gap-2" key={index}>
                        <X className="text-slate-400" />
                        <span className="text-lg font-extralight text-slate-950 max-lg:text-base">{value}</span>
                    </li>
                ))}
            </ul>
            <DefaultButton />
            <span className="text-slate-600 font-extralight">No credit card required</span>
        </div>
    )
}
