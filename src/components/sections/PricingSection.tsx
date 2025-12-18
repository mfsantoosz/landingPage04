import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { PricingCard } from "@/components/PricingCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function PricingSection() {

    const [isYearly, setIsYearly] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const period = isYearly ? "year" : "month";
    const billingText = isYearly ? "Billed yearly" : "Billed monthly";

    const monthlyPrices = {
        starter: 19,
        standard: 29,
        premium: 39
    }

    const prices = {
        starter: isYearly ? Math.round(monthlyPrices.starter * 12 * 0.75) : monthlyPrices.starter,
        standard: isYearly ? Math.round(monthlyPrices.standard * 12 * 0.75) : monthlyPrices.standard,
        premium: isYearly ? Math.round(monthlyPrices.premium * 12 * 0.75) : monthlyPrices.premium,
    };

    const pricingCardsData = [
        {
            id: "starter",
            pricingTitle: "STARTER",
            price: prices.starter,
            pricingDescription: ["Commercial License", "100+ HTML UI Elements", "01 Domain Support"],
            pricingNoIncludes: ["6 Month Premium Support", "Lifetime Updates"]
        },
        {
            id: "standard",
            pricingTitle: "STANDARD",
            price: prices.standard,
            pricingDescription: ["Commercial License", "100+ HTML UI Elements", "01 Domain Support", "6 Month Premium Support"],
            pricingNoIncludes: ["Lifetime Updates"]
        },
        {
            id: "premium",
            pricingTitle: "PREMIUM",
            price: prices.premium,
            pricingDescription: ["Commercial License", "100+ HTML UI Elements", "01 Domain Support", "6 Month Premium Support", "Lifetime Updates"],
            pricingNoIncludes: undefined
        }
    ];


    return (
        <section className="w-full h-screen px-48 py-20 flex flex-col justify-center items-center bg-slate-200 gap-6 max-lg:px-12 max-lg:h-auto ">
            <h2 className="font-bold text-4xl text-slate-950">Princing & Plans</h2>
            <p className="text-slate-600 text-xl font-extralight max-lg:text-center">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <div className="flex items-center gap-3 py-6">
                <span className="text-slate-600 font-extralight text-xl">Monthly</span>
                <Switch onCheckedChange={setIsYearly} className="data-[state=checked]:bg-indigo-600" />
                <span className="text-slate-600 font-extralight text-xl">Yearly</span>
                <div className="p-2 rounded-2xl bg-indigo-200 text-indigo-600 text-xs font-bold">SAVE 25%</div>
            </div>
            <div className="flex items-center gap-6 max-lg:hidden">
                {pricingCardsData.map((card) => (
                    <PricingCard
                        key={card.id}
                        pricingTitle={card.pricingTitle}
                        prices={card.price}
                        period={period}
                        billingText={billingText}
                        pricingDescription={card.pricingDescription}
                        pricingNoIncludes={card.pricingNoIncludes}
                    />
                ))}
            </div>
            <div className="md:hidden flex justify-center w-screen overflow-hidden">
                <Carousel
                    className="w-full"
                    opts={{
                        align: "center",
                    }}
                    setApi={(api) => {
                        if (!api) return

                        setActiveIndex(api.selectedScrollSnap())

                        api.on("select", () => {
                            setActiveIndex(api.selectedScrollSnap())
                        })
                    }}>
                    <CarouselContent className="h-screen " >
                        {pricingCardsData.map((card, index) => (
                            <CarouselItem key={card.id} className="basis-4/5 flex justify-center">
                                <PricingCard
                                    pricingTitle={card.pricingTitle}
                                    prices={card.price}
                                    period={period}
                                    billingText={billingText}
                                    pricingDescription={card.pricingDescription}
                                    pricingNoIncludes={card.pricingNoIncludes}
                                    isActive={index === activeIndex}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </section>
    )
}