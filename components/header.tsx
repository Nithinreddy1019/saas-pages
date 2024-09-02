import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "./ui/button";


const Header = () => {
    return (
        <header className="py-4 border-b md:border-none border-white/15 sticky top-0 z-10">
            <div className="container">
                <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
                    <div>
                        <div className="border border-white/15 rounded-lg h-10 w-10 inline-flex justify-center items-center">
                            <LogoIcon className="h-8 w-8"/>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-8 ">
                            <a href="" className="text-white/70 hover:text-white transition">Features</a>
                            <a href="" className="text-white/70 hover:text-white transition">Developers</a>
                            <a href="" className="text-white/70 hover:text-white transition">Pricing</a>
                            <a href="" className="text-white/70 hover:text-white transition">Changelog</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button>
                            Join waitlist
                        </Button>
                        <MenuIcon className="md:hidden"/>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;