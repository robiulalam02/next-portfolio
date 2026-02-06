"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// project images
import project1 from "@/assets/projects/quiz-pilot.webp"
import project2 from "@/assets/projects/bikroy-haat.webp"
import project3 from "@/assets/projects/booksleaf.webp"
import project4 from "@/assets/projects/viralift.webp"

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Quiz Pilot - AI Powered Quiz App",
        description: "An AI-driven learning ecosystem that generates programming quizzes, features a real-time global leaderboard, and provides an integrated AI chatbot for personalized study recommendations and performance analysis.",
        tech: ["Next.js", "Gemini API", "MongoDB", "Express.js"],
        github: "https://github.com/AsyncRifat/quiz-pilot",
        live: "https://quiz-pilot-sbpg.vercel.app",
        image: project1
    },
    {
        title: "Bikroy Haat - Online Grocery Store",
        description: "A full-featured grocery store platform with Stripe payment, admin dashboard, and real-time inventory tracking.",
        tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Tailwind CSS"],
        github: "https://github.com/robiulalam02/bikroy-haat-client",
        live: "https://bikroy-haat.web.app",
        image: project2
    },
    {
        title: "Viralift | AI Video SEO Optimizer",
        description: "Viralift is an intelligent SaaS application that helps creators to generate Hight-CTR Titles, Viral Hooks & SEO Tags for Facebook, Instagram & Youtube. Reducing research time by 90% and boosting organic reach",
        tech: ["Next.js", "Typescript", "Gemini API", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/robiulalam02/viralift",
        live: "https://viralift.vercel.app",
        image: project4
    },
    {
        title: "Booksleaf - Online Bookshelf",
        description: "A comprehensive digital library platform for managing personal collections, reading books online, and tracking progress. It features a community-driven review system and real-time reading status updates to help users organize their literary journey.",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/robiulalam02/booksleaf-client",
        live: "https://booksleaf-7a4b5.web.app",
        image: project3
    }
];

const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: "-200vw",
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );
        return () => { pin.kill(); };
    }, []);

    return (
        <section id="projects" className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
            <div ref={triggerRef} className="h-screen flex flex-col overflow-hidden">

                {/* Header Area */}
                <div className="pt-20 pb-6 px-6 w-full max-w-7xl mx-auto z-20 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-2"
                    >
                        <Layers size={16} />
                        <span>MY RECENT WORKS</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
                        Featured <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-8">Projects</span>
                    </h2>
                </div>

                {/* Horizontal Container */}
                <div ref={sectionRef} className="flex flex-1 w-[300vw] items-center pb-12">
                    {projects.map((project, index) => (
                        <div key={index} className="w-screen h-full flex items-center justify-center px-6 pb-12">

                            <motion.div
                                className="relative flex flex-col md:flex-row bg-gray-50 dark:bg-[#111] rounded-[2.5rem] border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl w-full max-w-7xl h-[100%] max-h-[600px] transition-colors duration-500"
                            >
                                {/* Left: Image side */}
                                <div className="relative w-full md:w-[55%] h-1/2 md:h-full bg-slate-200 dark:bg-slate-800 overflow-hidden group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        placeholder="blur"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-50 dark:from-[#111] via-transparent to-transparent z-10 opacity-60"></div>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                        <span className="text-[12rem] md:text-[18rem] font-black text-slate-900/5 dark:text-white/5">0{index + 1}</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-blue-600/10 backdrop-blur-sm">
                                        <motion.div whileHover={{ scale: 1.1 }} className="p-5 bg-blue-600 rounded-full text-white shadow-2xl">
                                            <ArrowUpRight size={32} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Right: Info side */}
                                <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center bg-gray-50 dark:bg-[#111]">
                                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] md:text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-gray-400 text-sm md:text-[1rem] leading-relaxed mb-6 md:mb-10 line-clamp-3 md:line-clamp-none">
                                        {project.description}
                                    </p>

                                    {/* Updated Professional Buttons */}
                                    <div className="flex items-center gap-4 md:gap-6 mt-auto pt-6 md:pt-8 border-t border-gray-200 dark:border-white/10">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="group relative overflow-hidden px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs md:text-sm tracking-widest uppercase transition-all"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Github size={18} className="group-hover:-rotate-12 transition-transform" /> Code
                                            </span>
                                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        </a>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="group relative overflow-hidden px-6 py-3 rounded-xl border border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-xs md:text-sm tracking-widest uppercase transition-all"
                                        >
                                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" /> Live
                                            </span>
                                            <div className="absolute inset-0 bg-slate-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-20 bg-white dark:bg-[#0a0a0a]"></div>
        </section>
    );
};

export default Projects;