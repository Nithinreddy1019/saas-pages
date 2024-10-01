import Logo from "@/assets/logo.svg";
import XSocial from '@/assets/social-x.svg';
import InstaSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";


export const Footer = () => {
    return (
        <footer className="py-5 border-t border-white/15">
            <div className="container">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex gap-2 items-center lg:flex-1">
                        <Logo className="size-6"/>
                        <div className="font-medium">Startup Landing page</div>
                    </div>
                    
                    <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
                        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Features</a>
                        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Developers</a>
                        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Company</a>
                        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">Blog</a>
                        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm">changelog</a>
                    </nav>
                    
                    <div className="flex gap-5 lg:flex-1 lg:justify-end">
                        <XSocial className="text-white/40 hover:text-white transition"/>
                        <InstaSocial className="text-white/40 hover:text-white transition"/>
                        <YtSocial className="text-white/40 hover:text-white transition"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}