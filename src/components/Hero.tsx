    "use client";
    import Image from "next/image";
    import { motion } from "framer-motion";
    import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
    import { Typewriter } from "react-simple-typewriter";

    // Import your image from assets
    import ProfileImg from "@/assets/robiul.png";
import HeroActions from "./HeroActions";

    const techIcons = [
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", initial: { top: "-10%", left: "10%" } },
        { name: "NextJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", initial: { top: "10%", right: "-5%" } },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", initial: { bottom: "15%", left: "-10%" } },
        { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", initial: { bottom: "-5%", right: "15%" } },
        { name: "JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", initial: { top: "40%", right: "-15%" } },
    ];

    const Hero = () => {
        return (
            <section id="home" className="min-h-[780px] flex items-center justify-center pt-28 md:pt-20 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col-span-2"
                    >
                        <h2 className="text-blue-600 dark:text-blue-500 font-mono text-lg tracking-widest">
                            Hi, my name is
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                            Robiul Alam. <br />
                            <div className="text-slate-500 dark:text-gray-400 mt-2">
                                <p className="text-3xl md:text-4xl">I am a</p>
                                <p className="text-blue-600 dark:text-blue-500 text-4xl md:text-6xl min-w-[250px]">
                                    <Typewriter
                                        words={["MERN Developer", "Next.js Expert", "Fullstack Developer", "Frontend Developer"]}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </p>
                            </div>
                        </h1>

                        <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                            I specialize in building high-performance, scalable web applications.
                            From database schema design to polished frontend animations.
                        </p>

                        <HeroActions />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center mt-10 mb-20"
                    >
                        <div className="w-72 h-72 md:w-96 md:h-96 relative z-10">

                            {/* Floating Tech Logos */}
                            {techIcons.map((icon, index) => (
                                <motion.div
                                    key={index}
                                    initial={icon.initial}
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3 + index,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute z-20 w-12 h-12 md:w-16 md:h-16 bg-white/80 dark:bg-gray-900/80 p-3 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-xl"
                                >
                                    <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
                                </motion.div>
                            ))}

                            {/* Animated Background Glow */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2.5rem] -z-10 opacity-20 blur-3xl"
                            ></motion.div>

                            {/* Rotating Frame */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border-2 border-dashed border-blue-500/20 rounded-[3rem] -z-10"
                            ></motion.div>

                            {/* Next.js Optimized Image */}
                            <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border-2 border-gray-200 dark:border-white/10 shadow-2xl relative">
                                <Image
                                    src={ProfileImg}
                                    alt="Robiul - Professional Portrait"
                                    fill
                                    priority
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 768px) 288px, 384px"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    };

    export default Hero;