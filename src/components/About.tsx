"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, User, Sparkles, Clock, Globe, Briefcase } from "lucide-react";

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <section id="about" className="py-24 px-6 relative bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto text-center">
                <motion.div {...fadeIn} className="flex flex-col mb-16">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-2 justify-center">
                        <Sparkles size={16} />
                        <span>GET TO KNOW ME</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        About <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-8">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Side: Bio & Professional Intro */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 space-y-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed"
                    >
                        <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none">
                            <div className="flex items-center gap-4 mb-4 text-slate-900 dark:text-white">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-500">
                                    <User size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">My Journey</h3>
                            </div>
                            <p>
                                Hello! I'm <span className="text-slate-900 dark:text-white font-medium">Robiul Alam</span>, a passionate
                                <span className="text-blue-600 dark:text-blue-500 font-semibold"> MERN Stack Developer</span>.
                                I specialize in turning complex ideas into functional, beautiful web applications.
                            </p>
                            <p className="mt-4 text-base md:text-lg">
                                During my recent internship at <span className="text-slate-900 dark:text-white font-medium">DIGI5 LTD</span>, I honed my skills in
                                building responsive, high-performance user interfaces. I am deeply committed to the
                                <span className="text-slate-900 dark:text-white font-medium font-medium"> Next.js</span> ecosystem and enjoy tackling
                                challenging frontend problems.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none">
                            <div className="flex items-center gap-4 mb-4 text-slate-900 dark:text-white">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-500">
                                    <Code2 size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">Development Philosophy</h3>
                            </div>
                            <p>
                                I believe in writing clean, maintainable code. Whether it's optimizing
                                <span className="text-slate-900 dark:text-white font-medium"> MongoDB</span> queries or crafting animations with
                                <span className="text-slate-900 dark:text-white font-medium"> Framer Motion</span>, I pay close attention to
                                performance and user experience in every project I undertake.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Experience & Education Timeline */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/10 to-white dark:to-black p-8 rounded-3xl border border-gray-200 dark:border-white/10 relative overflow-hidden shadow-sm dark:shadow-none">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                                <Briefcase className="text-blue-600 dark:text-blue-500" size={20} /> Professional & Academic
                            </h3>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300 dark:to-gray-800"></div>

                                {/* Internship Experience */}
                                <div className="relative pl-10 mb-10">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-blue-500 rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                                    <h4 className="text-slate-900 dark:text-white font-bold text-lg">Frontend Developer Intern</h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-mono text-sm">Oct 2025 — Dec 2025</p>
                                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-1 font-medium">DIGI5 LTD</p>
                                </div>

                                {/* Diploma Education */}
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#0a0a0a] border-2 border-purple-500 rounded-full z-10"></div>
                                    <h4 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">Diploma in Telecommunication</h4>
                                    <p className="text-purple-600 dark:text-purple-400 font-mono text-sm">March 2023 — Present</p>
                                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-2 flex items-center gap-1 italic">
                                        <Globe size={14} /> Feni Computer Institute
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professional Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 text-center hover:bg-blue-500/5 transition-colors group shadow-sm dark:shadow-none">
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">20+</div>
                                <div className="text-slate-500 dark:text-gray-400 text-sm font-medium">Personal<br />Projects</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 text-center hover:bg-purple-500/5 transition-colors group shadow-sm dark:shadow-none">
                                <div className="text-4xl font-bold text-purple-600 dark:text-purple-500 mb-1 flex justify-center items-center gap-1">
                                    <Clock size={28} />
                                    <span>2+</span>
                                </div>
                                <div className="text-slate-500 dark:text-gray-400 text-sm font-medium">Years<br />of Learning</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;