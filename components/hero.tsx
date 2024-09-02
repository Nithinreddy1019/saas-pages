import { Button } from "./ui/button";
import starBg from "@/assets/stars.png";

const Hero = () => {
    return (
        <section 
            className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
            style={{
            backgroundImage: `url(${starBg.src})`
        }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
            {/* planet below */}
            <div className="absolute h-64 w-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),_-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgb(140,69,255)]
            ">
            </div>
            {/* ring-1 */}
            <div className="absolute h-[344px] w-[344px] md:size-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                </div>
                <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                </div>
                <div className="absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex items-center justify-center rounded-full">
                    <div className="h-2 w-2 bg-white rounded-full">
                    </div>
                </div>
            </div>
            {/* ring-2 */}
            <div className="absolute h-[444px] w-[444px] md:size-[780px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            </div>
            {/* ring-3 */}
            <div className="absolute h-[544px] w-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                    </div>
                    <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                    </div>
                    <div className="absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex items-center justify-center rounded-full">
                        <div className="h-2 w-2 bg-white rounded-full">
                        </div>
                    </div>
            </div>
            <div className="container relative mt-16">
                <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center pb-2">A Page</h1>
                <p className="text-lg text-white/70 md:text-xl mt-5 text-center max-w-xl mx-auto">
                    A landing page created to implement framer motion along with nextjs to craft beatiful looking sites. Craft seamless UX with framer and react.
                </p>
                <div className="flex justify-center mt-5">
                    <Button>
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;