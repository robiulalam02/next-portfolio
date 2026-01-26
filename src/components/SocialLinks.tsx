"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, LucideIcon } from "lucide-react";

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const SOCIAL_DATA: SocialLink[] = [
  { Icon: Linkedin, href: "https://linkedin.com/in/shopneel10", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/robiulalam02", label: "GitHub" },
  { Icon: Twitter, href: "https://x.com/shopneel_10", label: "Twitter" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-12">
      {SOCIAL_DATA.map(({ Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="w-12 h-12 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-500/50 transition-all shadow-sm"
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;