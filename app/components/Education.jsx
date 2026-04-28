import { educationData } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Education = () => {
    return (
        <section
            id="education"
            className="w-full px-5 sm:px-8 md:px-[12%] py-16 md:py-20 scroll-mt-20 bg-white dark:bg-[#11001F] transition-colors duration-500"
        >

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
            >
                <h4 className="text-base sm:text-lg mb-2 font-Ovo text-gray-500 dark:text-gray-300">
                    My Journey
                </h4>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-Ovo font-semibold text-gray-800 dark:text-white">
                    Education Background
                </h2>

                <p className="max-w-xl md:max-w-2xl mx-auto mt-3 md:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    My academic journey that built a strong foundation in software development and problem-solving.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">

                {/* Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute left-2 sm:left-4 md:left-1/2 top-0 w-[2px] sm:w-[3px] rounded-full
                    bg-gradient-to-b from-gray-300 via-gray-400 to-transparent
                    dark:bg-gradient-to-b dark:from-purple-500/40 dark:via-purple-500/20 dark:to-transparent"
                >
                    <motion.div
                        animate={{ y: ["-20%", "120%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="hidden dark:block absolute w-full h-10 bg-white/10 blur-sm"
                    />
                </motion.div>

                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`
                        mb-10 md:mb-12 
                        flex flex-col md:flex-row items-start md:items-center
                        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
                        `}
                    >

                        {/* Empty spacing (desktop only) */}
                        <div className="hidden md:block md:w-1/2"></div>

                        {/* Dot */}
                        <div className="relative z-10 flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full 
                                bg-gray-700 
                                dark:bg-purple-500 
                                shadow-md 
                                dark:shadow-purple-500/40 
                                hover:scale-125 transition duration-300">
                            </div>
                        </div>

                        {/* Card */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="
                            ml-6 sm:ml-8 md:ml-0
                            mt-4 md:mt-0
                            w-full md:w-1/2
                            p-4 sm:p-5 md:p-6
                            rounded-xl backdrop-blur-md
                            bg-gray-50 dark:bg-white/5
                            border border-gray-200 dark:border-white/10
                            shadow-md hover:shadow-xl
                            transition-all duration-300
                            "
                        >

                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                                {item.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">
                                {item.institute}
                            </p>

                            <span className="text-xs text-gray-400">
                                {item.duration}
                            </span>

                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-5">
                                {item.description}
                            </p>
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Education