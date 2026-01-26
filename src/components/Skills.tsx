"use client";
import { motion } from "framer-motion";
import {
    Database,
    Layout,
    Terminal,
    Cpu,
    Globe
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-blue-500" />,
        skills: ["React.js", "Next.js 15", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Framer Motion"],
        color: "from-blue-500/20 to-transparent dark:from-blue-500/10"
    },
    {
        title: "Backend & Database",
        icon: <Database className="text-green-500" />,
        skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"],
        color: "from-green-500/20 to-transparent dark:from-green-500/10"
    },
    {
        title: "Tools & Technologies",
        icon: <Terminal className="text-purple-500" />,
        skills: ["Git & GitHub", "Postman", "Vercel", "Firebase", "NPM/Bun", "Linux Basics"],
        color: "from-purple-500/20 to-transparent dark:from-purple-500/10"
    }
];

const marqueeLogos = [
    { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/000000/white" },
    { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Express", url: "https://cdn.simpleicons.org/express/000000/white" },
    { name: "Redux", url: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000000/white" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-2"
                    >
                        <Cpu size={16} />
                        <span>MY TECH STACK</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Technical <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-8">Expertise</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`bg-gradient-to-br ${category.color} p-1 rounded-[2rem] border border-gray-200 dark:border-white/5 group shadow-sm dark:shadow-none`}
                        >
                            <div className="bg-gray-50 dark:bg-[#0f0f0f] p-8 rounded-[1.9rem] h-full hover:bg-transparent transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-none">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-slate-700 dark:text-gray-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-white transition-all cursor-default shadow-sm dark:shadow-none"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- INFINITE MARQUEE SECTION --- */}
                <div className="relative mt-24">
                    {/* Gradient Masks for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent pointer-events-none"></div>

                    <div className="overflow-hidden flex">
                        <motion.div
                            className="flex gap-16 items-center whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 25,
                                repeat: Infinity,
                            }}
                        >
                            {/* Double the array to ensure seamless looping */}
                            {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                                <div key={index} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group">
                                    <img
                                        src={logo.url}
                                        alt={logo.name}
                                        className="h-10 w-10 object-contain brightness-0 dark:brightness-100 invert-0 dark:invert-0"
                                    />
                                    <span className="text-slate-900 dark:text-white font-bold tracking-widest text-lg uppercase">{logo.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Learning Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-6 rounded-2xl border border-dashed border-gray-300 dark:border-white/10 text-center"
                >
                    <p className="text-slate-500 dark:text-gray-500 text-sm italic flex items-center justify-center gap-2">
                        <Globe size={14} /> Currently exploring WebSockets and Docker to enhance my backend performance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;