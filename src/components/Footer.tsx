"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";
import FooterSocials from "./FooterSocials";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-[#0a0a0a] pt-16 pb-8 px-6 relative border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand/Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter">
                        ROBIUL<span className="text-blue-600 dark:text-blue-500">.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-gray-500 text-sm mt-2 max-w-xs uppercase tracking-widest font-mono">
                        MERN STACK DEVELOPER
                    </p>
                </motion.div>

                {/* Social Links */}
                <FooterSocials />

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                    {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-white text-sm font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Divider & Copyright */}
                <div className="w-full pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-gray-500 text-sm flex items-center gap-1">
                        © {currentYear} Robiul Alam. All rights reserved
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="group flex items-center gap-3 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-mono font-bold"
                    >
                        BACK TO TOP
                        <div className="p-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            <ArrowUp size={16} />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Subtle Glow in background - Reduced for light mode */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;