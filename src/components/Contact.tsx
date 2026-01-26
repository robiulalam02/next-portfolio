"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "sonner"; // Import toast
import SocialLinks from "./SocialLinks";

const Contact = () => {

    // Minimal professional submission handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Create a fake promise to simulate a network request
        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: data.name }), 2000));

        toast.promise(promise, {
            loading: 'Sending your message...',
            success: (data: any) => {
                return `Your message has been sent!`;
            },
            error: 'Something went wrong. Please try again.',
        });

        // Optional: Reset form after success
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-4">
                            <MessageSquare size={16} />
                            <span>SAY HELLO</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Let’s build something <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-8">great</span> together.
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            I am currently available for freelance work or full-time positions.
                            If you have a project in mind, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-500 dark:text-gray-500 text-sm uppercase tracking-widest font-mono">Email Me</p>
                                    <p className="text-slate-900 dark:text-white text-lg font-medium">robiul@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-500 dark:text-gray-500 text-sm uppercase tracking-widest font-mono">Location</p>
                                    <p className="text-slate-900 dark:text-white text-lg font-medium">Feni, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        <SocialLinks />
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-50 dark:bg-[#111] p-8 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-2xl relative group overflow-hidden transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Add onSubmit handler to the form */}
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-500 dark:text-gray-400 text-sm font-mono ml-1">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-500 dark:text-gray-400 text-sm font-mono ml-1">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-500 dark:text-gray-400 text-sm font-mono ml-1">Subject</label>
                                <input
                                    required
                                    name="subject"
                                    type="text"
                                    placeholder="How can I help you?"
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-500 dark:text-gray-400 text-sm font-mono ml-1">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 resize-none shadow-sm"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20"
                            >
                                Send Message <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;