"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const HeroActions = () => {
    const RESUME_LINK = "https://drive.google.com/file/d/1fUMUOiL8-ckK6bGm1BG8-j6w8dkhyM2D/view?usp=sharing";
    const SOCIALS = {
        github: "https://github.com/robiulalam02",
        linkedin: "https://linkedin.com/in/shopneel10",
        twitter: "https://x.com/shopneel_10"
    };

    return (
        <div className="flex flex-wrap gap-8 items-center">
            {/* Download Button */}
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3 group text-white shadow-xl shadow-blue-500/20"
                >
                    Download CV
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </a>

            {/* Social Icons */}
            <div className="flex gap-8 text-slate-400 dark:text-gray-500">
                <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                    <Github className="w-7 h-7" />
                </a>
                <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                    <Linkedin className="w-7 h-7" />
                </a>
                <a
                    href={SOCIALS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                    <Twitter className="w-7 h-7" />
                </a>
            </div>
        </div>
    );
};

export default HeroActions;