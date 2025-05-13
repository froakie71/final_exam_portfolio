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
                src="https://images.unsplash.com/photo-1686421402964-24b6d8247dff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Classic Electric Guitar Collection"
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
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Find Your Perfect Sound
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Discover an extensive collection of premium guitars from the world&apos;s finest craftsmen
                    </p>
                    <a
                        href="#guitars"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Explore Collection
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
