'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (        <div className="relative h-[80vh] overflow-hidden">            <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Professional Developer Workspace"
                fill
                className="object-cover"
                priority
                quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative h-full flex items-center justify-center text-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-4"
                >                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Francis Ampoon
                    </h1>
                    <h2 className="text-3xl text-indigo-400 mb-4">Frontend Developer</h2>
                    <p className="text-xl text-gray-200 mb-8">
                        Passionate developer with 3 years of experience building responsive websites using React and Flutter
                    </p>
                    <a
                        href="#projects"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
