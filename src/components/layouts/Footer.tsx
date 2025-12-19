import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export const Footer = () => {
    return(
        <footer className="w-full px-48 pt-20 flex flex-col justify-center items-center bg-slate-900 text-white h-[550px] relative">
            <div className="flex gap-32 pb-20">
                <div className="flex flex-col gap-6">
                    <span className="font-extralight">Company</span>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Carrers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-extralight">Product</span>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>News</li>
                        <li>Help desk</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-extralight">Services</span>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li>Digital Marketing</li>
                        <li>Content Writing</li>
                        <li>SEO for Business</li>
                        <li>UI Design</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-extralight">Legal</span>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-extralight">Contact us</span>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li>info@email.com</li>
                        <li>+123 456 789</li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-t border-slate-700 py-8 flex justify-between items-center ">
                <p>© 2025 Omega. All rights reserved.</p>
                <div className="flex items-center gap-4 ">
                    <Facebook className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in-out"/>
                    <Instagram className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in-out"/>
                    <Twitter className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in-out"/>
                    <Youtube className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in-out"/>
                </div>
            </div>
        </footer>
    )
}