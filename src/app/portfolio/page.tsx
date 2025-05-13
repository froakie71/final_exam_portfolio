'use client';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, EmailIcon } from '../components/SocialIcons';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-gray-50 py-20">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Francis Doe</h1>
                <h2 className="text-2xl text-indigo-600 mb-6">Frontend Developer</h2>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                    <a href="mailto:francis@example.com" 
                       className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                        <EmailIcon className="w-5 h-5" />
                        <span>francis@example.com</span>
                    </a>
                    <a href="https://linkedin.com/in/francisdoe" 
                       className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                       target="_blank" 
                       rel="noopener noreferrer">
                        <LinkedinIcon className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/francisdoe" 
                       className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                       target="_blank" 
                       rel="noopener noreferrer">
                        <GithubIcon className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>
                </div>
            </motion.div>

            {/* About Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Passionate Frontend Developer with 3 years of experience building responsive 
                    websites using React and Flutter. Focused on creating clean, user-friendly interfaces.
                </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="font-semibold text-indigo-600 mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                HTML/CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                JavaScript
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                TypeScript
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="font-semibold text-indigo-600 mb-4">Frameworks</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                React
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Flutter
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Dart
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="font-semibold text-indigo-600 mb-4">Tools</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Git
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Firebase
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                REST APIs
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather App</h3>
                        <div className="text-indigo-600 mb-4">Flutter & OpenWeather API</div>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Displays real-time weather for any location
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Features dynamic backgrounds and animations
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://github.com/francisdoe/weather-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                            >
                                <CodeBracketIcon className="w-5 h-5" />
                                <span>Source Code</span>
                            </a>
                            <a
                                href="https://weather-app-demo.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                            >
                                <GlobeAltIcon className="w-5 h-5" />
                                <span>Live Demo</span>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Website</h3>
                        <div className="text-indigo-600 mb-4">React & Firebase</div>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                User login, shopping cart, and admin dashboard
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Payment integration with Stripe
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://github.com/francisdoe/ecommerce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                            >
                                <CodeBracketIcon className="w-5 h-5" />
                                <span>Source Code</span>
                            </a>
                            <a
                                href="https://ecommerce-demo.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                            >
                                <GlobeAltIcon className="w-5 h-5" />
                                <span>Live Demo</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Education Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-4xl mx-auto px-4"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">BSc in Computer Science</h3>
                    <div className="text-indigo-600">University of TechLand</div>
                    <div className="text-gray-600">Graduated 2022</div>
                </div>
            </motion.section>
        </main>
    );
}
