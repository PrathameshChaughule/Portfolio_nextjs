import { useRef } from "react"
import Image from "next/image"
import { workData } from "@/assets/assets"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = ({ dark }) => {

    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef
        if (!current) return

        const scrollAmount = 350
        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section
            id="work"
            className={`w-full py-20 px-[5%] transition ${dark ? "bg-[#11001F] text-white" : "bg-white text-black"
                }`}>

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-semibold">
                    My Work
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3">
                    Selected projects showcasing my skills
                </p>
            </div>

            {/* Wrapper */}
            <div className="relative">

                {/* Blur Effects */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-[#11001F] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-[#11001F] to-transparent z-10" />

                {/* Left Button */}
                <button onClick={() => scroll("left")} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                    <FaAngleLeft className="text-2xl" />
                </button>

                {/* Scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-9 mx-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-12 scrollbar-hide"
                >
                    {workData.map((project, index) => (
                        <div
                            key={index}
                            className={`min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[450px]
                            max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px]
                            snap-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 
                                ${dark
                                    ? "bg-[#1a0b2e96] hover:bg-[#22123A] border border-white/10 shadow-lg shadow-black/30"
                                    : "bg-[#F8F9FB] hover:bg-white border border-black/5 shadow-sm hover:shadow-md"
                                }`}
                        >

                            <div className="relative h-44 sm:h-52 md:h-60 lg:h-72">
                                <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
                            </div>

                            <div className="p-5">

                                <h3 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    className={`text-center py-2 rounded-full border transition flex justify-center gap-3 items-center ${dark
                                        ? "border-gray-600 hover:bg-white/90 hover:text-black"
                                        : "border-gray-300 hover:bg-black hover:text-white"
                                        }`}
                                >
                                    View Website <FaArrowRightLong />
                                </a>

                            </div>

                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button onClick={() => scroll("right")} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                    <FaAngleRight className="text-2xl" />
                </button>

            </div>

        </section>
    )
}

export default Work