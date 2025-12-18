import { Button } from "@/components/ui/button"

const DefaultButton = () => {
    return(
        <Button className="bg-indigo-600 py-6 text-white text-base font-medium rounded-lg w-48 cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ease-in-out max-lg:w-full max-lg:py-4">
            Start a free trial
        </Button>
    )
}

export default DefaultButton;