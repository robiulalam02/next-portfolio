"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // 1. Import Next Image
import ThemeToggle from "./ThemeToggle";
import Logo from "@/assets/robiul_dev_logo.png"; // 2. Import your logo (adjust extension if it's .svg or .jpg)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // ... your existing useEffect and handleNavClick logic ...
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveSection("home");
                return;
            }
            const sections = navLinks.map(link => {
                const id = link.id === "home" ? "hero" : link.id;
                return document.getElementById(id);
            });
            sections.forEach((section, index) => {
                if (!section) return;
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(navLinks[index].id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        setIsOpen(false);
        if (window.history.pushState) {
            window.history.pushState(null, "", href === "#" ? "/" : href);
        }
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            setTimeout(() => {
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <nav className="fixed w-full z-[100] bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-4 py-3 flex justify-between items-center">

                {/* Updated Left Side: Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <Image
                        src={Logo}
                        alt="Dev Robiul Logo"
                        width={50} // Adjust based on your logo aspect ratio
                        height={50}
                        priority // Ensures the logo loads immediately
                        className="object-contain"
                    />
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-1 p-1 bg-gray-100/50 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 relative">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 relative z-10 ${activeSection === link.id
                                    ? "text-white"
                                    : "text-slate-600 dark:text-gray-400 hover:text-blue-500"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="navbar-active-bg"
                                        className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button className="p-2 text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-lg font-bold px-4 py-2 rounded-xl transition-colors ${activeSection === link.id
                                        ? "bg-blue-600 text-white"
                                        : "text-slate-900 dark:text-white"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;