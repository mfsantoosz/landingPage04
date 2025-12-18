import FeaturesCard from "@/components/FeaturesCard";
import { ChartNoAxesCombined, Layers, UserCog } from "lucide-react";

export default function FeaturesSection(){
    return(
        <section className="flex px-48 gap-20 justify-between py-20 max-lg:flex-col max-lg:justify-center  max-lg:px-12">
            <FeaturesCard 
                icon={Layers}
                title="Organize your campaigns" 
                description="Streamline your marketing efforts with powerful campaign management tools. Create, schedule, and optimize multiple campaigns from a single dashboard."  
            />
            <FeaturesCard 
                icon={UserCog}
                title="Manage customers" 
                description="Build stronger relationships with comprehensive customer profiles. Track interactions, preferences, and engagement to deliver personalized experiences." 
            />
            <FeaturesCard 
                icon={ChartNoAxesCombined}
                title="Track progress fast" 
                description="Monitor your performance in real-time with intuitive analytics. Get actionable insights and make data-driven decisions to accelerate your growth." 
            />
        </section>
    )
}