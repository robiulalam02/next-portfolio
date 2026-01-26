"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Search } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cert1 from "@/assets/certificate/certificate_student.webp";
import cert2 from "@/assets/certificate/hackerrank.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const certifications = [
    {
        title: "Complete MERN Stack Development",
        issuer: "Programming Hero",
        date: "June 2025",
        image: cert1,
        link: "#",
        id: "WEB11-2235"
    },
    {
        title: "HackerRank Problem Solving Intermediate",
        issuer: "HackerRank",
        date: "Sep 2025",
        image: cert2,
        link: "https://www.hackerrank.com/certificates/f401819cf72f",
        id: "F401819CF72F"
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-3"
                    >
                        <ShieldCheck size={18} />
                        <span className="tracking-widest uppercase font-bold">Verified Achievements</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                        Official <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-8">Credentials</span>
                    </h2>
                </div>

                {/* Swiper Slider */}
                <div className="w-full">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full max-w-6xl !pb-16 !px-2"
                    >
                        {certifications.map((cert, index) => (
                            <SwiperSlide key={index} className="!bg-transparent">
                                <div className="group relative grid grid-cols-1 md:grid-cols-12 bg-gray-50 dark:bg-[#111] rounded-[2rem] md:rounded-[3rem] border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl transition-all duration-500">

                                    {/* Image Side */}
                                    <div className="md:col-span-7 relative h-60 sm:h-80 md:h-[500px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <div className="absolute inset-0 p-4 md:p-10 z-10">
                                            <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                                                <Image
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-contain md:object-cover transition-all duration-1000 group-hover:scale-105"
                                                    placeholder="blur"
                                                />
                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-xl">
                                                        <Search size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Background Glows */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px]"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[80px]"></div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center relative bg-gray-50 dark:bg-[#111]">
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 mb-4 font-mono text-xs font-bold tracking-widest uppercase">
                                            <span>ID: {cert.id}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                                            {cert.title}
                                        </h3>

                                        <div className="space-y-5 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600">
                                                    <CheckCircle2 size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 dark:text-gray-500 text-[10px] uppercase font-bold tracking-wider">Accredited By</p>
                                                    <p className="text-slate-800 dark:text-gray-200 font-bold text-md">{cert.issuer}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-purple-600">
                                                    <Award size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 dark:text-gray-500 text-[10px] uppercase font-bold tracking-wider">Issued Date</p>
                                                    <p className="text-slate-800 dark:text-gray-200 font-bold text-md">{cert.date}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            href={cert.link}
                                            target="_blank"
                                            className="group/btn relative flex items-center justify-between gap-4 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-all overflow-hidden"
                                        >
                                            <span className="relative z-10 text-sm">VERIFY CREDENTIAL</span>
                                            <ExternalLink size={18} className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                            <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                        </motion.a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #3b82f6 !important;
                    width: 8px !important;
                    height: 8px !important;
                    opacity: 0.2;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 30px !important;
                    border-radius: 4px !important;
                }
            `}</style>
        </section>
    );
};

export default Certificates;