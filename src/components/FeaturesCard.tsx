import type { LucideIcon } from "lucide-react";

interface FeaturesCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const FeaturesCard = ({title, description, icon: Icon}: FeaturesCardProps) => {
    return(
        <div className="flex gap-4 items-center w-1/3 max-lg:w-full">
            <Icon size={100} color="#4f39f6" />
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default FeaturesCard;