'use client';
import { ClientMotion, ClientMotionSection } from '../components/ClientMotion';
import { LinkedinIcon, GithubIcon, EmailIcon } from '../components/SocialIcons';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { SocialLink } from '../components/SocialLink';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-gray-50 py-20">
            {/* Hero Section */}
            <ClientMotion 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Francis Ampoon</h1>
                <h2 className="text-2xl text-indigo-600 mb-6">Frontend Developer</h2>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                    <SocialLink 
                        href="mailto:francis@example.com"
                        icon={<EmailIcon className="w-5 h-5" />}
                        text="francis@example.com"
                    />
                    <SocialLink 
                        href="https://linkedin.com/in/francisdoe"
                        icon={<LinkedinIcon className="w-5 h-5" />}
                        text="LinkedIn"
                        external={true}
                    />
                    <SocialLink 
                        href="https://github.com/francisdoe"
                        icon={<GithubIcon className="w-5 h-5" />}
                        text="GitHub"
                        external={true}
                    />
                </div>
            </ClientMotion>

            {/* About Section */}
            <ClientMotionSection 
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
            </ClientMotionSection>

            {/* Skills Section */}
            <ClientMotionSection 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ClientMotion 
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
                    </ClientMotion>
                    <ClientMotion 
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
                    </ClientMotion>
                    <ClientMotion 
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
                    </ClientMotion>
                </div>
            </ClientMotionSection>

            {/* Projects Section */}
            <ClientMotionSection 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-4xl mx-auto px-4 mb-20"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ClientMotion 
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
                            <SocialLink 
                                href="https://github.com/francisdoe/weather-app"
                                icon={<CodeBracketIcon className="w-5 h-5" />}
                                text="Source Code"
                                external={true}
                            />
                            <SocialLink 
                                href="https://weather-app-demo.vercel.app"
                                icon={<GlobeAltIcon className="w-5 h-5" />}
                                text="Live Demo"
                                external={true}
                            />
                        </div>
                    </ClientMotion>
                    <ClientMotion 
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
                            <SocialLink 
                                href="https://github.com/francisdoe/ecommerce"
                                icon={<CodeBracketIcon className="w-5 h-5" />}
                                text="Source Code"
                                external={true}
                            />
                            <SocialLink 
                                href="https://ecommerce-demo.vercel.app"
                                icon={<GlobeAltIcon className="w-5 h-5" />}
                                text="Live Demo"
                                external={true}
                            />
                        </div>
                    </ClientMotion>
                </div>
            </ClientMotionSection>

            {/* Education Section */}
            <ClientMotionSection 
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
            </ClientMotionSection>
        </main>
    );
}
