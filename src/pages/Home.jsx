import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch(import.meta.env.VITE_CONTACT_FORM_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                setStatus("Oops! Something went wrong.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Oops! Something went wrong.");
        }
    };

    return (
        <div className="px-6 py-28 max-w-6xl mx-auto">
            {/* About Section */}
            <section id="about" className="scroll-mt-28 mb-16 max-w-4xl mx-auto px-6"s>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-700 leading-relaxed text-lg md:text-xl">
                    I am a{" "}
                    <span className="font-semibold">
                        full-stack software and web developer
                    </span>{" "}
                    with three years of professional experience. After
                    graduating from{" "}
                    <span className="font-semibold">CodeClan</span>, I have
                    worked with multiple small companies to amplify and improve
                    their internal systems and client-facing websites. I am
                    proficient in{" "}
                    <span className="font-semibold">
                        React, Next.js, TypeScript, Wordpress
                    </span>
                    , and modern styling frameworks including{" "}
                    <span className="font-semibold">
                        SCSS, Tailwind, and MUI
                    </span>{" "}
                    for building responsive and accessible frontend
                    applications. On the backend, I am skilled with{" "}
                    <span className="font-semibold">Node.js, Express</span>, and
                    databases like{" "}
                    <span className="font-semibold">
                        PostgreSQL and MongoDB
                    </span>
                    . I also have experience integrating third-party software
                    across platforms using{" "}
                    <span className="font-semibold">
                        Stripe, Zapier, Telegram, and OpenAI
                    </span>
                    . I understand the importance of modular, clean code,
                    knowing when to reuse existing solutions versus creating new
                    features, to build maintainable and scalable applications.
                </motion.p>

                <a
                    href="/my-portfolio/CV.pdf"
                    download
                    className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 font-semibold transition">
                    Check out my CV
                </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-28 mb-16 max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-28 mb-16 max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Contact
                </motion.h2>

                {status && (
                    <p className="mb-4 text-green-600 font-medium">{status}</p>
                )}

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-1"
                            htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 font-semibold transition">
                        Send Message
                    </button>
                </motion.form>
            </section>
        </div>
    );
}
