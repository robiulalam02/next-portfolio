import React from 'react'
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter,} from "lucide-react";

const FooterSocials = () => {
    return (
        <div className="flex gap-6 mb-12">
            {[
                { Icon: Github, href: "https://github.com/robiulalam02" },
                { Icon: Linkedin, href: "https://linkedin.com/in/shopneel10" },
                { Icon: Twitter, href: "https://x.com/shopneel_10" }
            ].map((item, i) => (
                <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 shadow-sm"
                >
                    <item.Icon size={20} />
                </motion.a>
            ))}
        </div>
    )
}

export default FooterSocials
