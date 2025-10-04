import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const brandColor = "bg-teal-600";
    const hoverColor = "hover:bg-teal-500";

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed w-full z-50 ${brandColor} shadow-md`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1
                    className="text-2xl md:text-3xl font-bold tracking-wide text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    PHIL BROADLEY
                </h1>

                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <a
                        href="#about"
                        className="text-white hover:text-indigo-200 transition-colors duration-300">
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-white hover:text-indigo-200 transition-colors duration-300">
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-indigo-200 transition-colors duration-300">
                        Contact
                    </a>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none p-2 rounded hover:bg-indigo-500 transition">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`${brandColor} md:hidden px-6 pb-4 flex flex-col space-y-2 shadow-inner`}>
                    <a
                        href="#about"
                        className="block py-2 text-white hover:text-indigo-200 font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}>
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block py-2 text-white hover:text-indigo-200 font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="block py-2 text-white hover:text-indigo-200 font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}>
                        Contact
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}
