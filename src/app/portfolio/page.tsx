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
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Francis Ampoon</h1>                <h2 className="text-2xl text-indigo-600 mb-6">Full Stack Developer & E-commerce Specialist</h2>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                    <SocialLink 
                        href="mailto:froakie71@gmail.com"
                        icon={<EmailIcon className="w-5 h-5" />}
                        text="froakie71@gmail.com"
                    />
                    <SocialLink 
                        href="https://github.com/froakie71"
                        icon={<GithubIcon className="w-5 h-5" />}
                        text="GitHub"
                        external={true}
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/francis-ampoon/"
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
            >                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>                <p className="text-lg text-gray-600 leading-relaxed">
                    Based in Cebu, Philippines, a thriving hub for mobile and web development in the region, I am a dedicated full-stack developer passionate about creating innovative digital solutions. 
                    Being part of Cebu's dynamic tech community has exposed me to cutting-edge development practices and emerging technologies. The city's growing 
                    reputation as a tech destination has provided me with numerous opportunities to work on exciting projects and collaborate with talented developers 
                    in the local scene. I leverage this vibrant tech ecosystem to deliver high-quality, user-centered web applications that meet modern business needs.
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
                    >                        <h3 className="font-semibold text-indigo-600 mb-4">Frontend</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Next.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Tailwind CSS
                            </li>
                        </ul>
                    </ClientMotion>
                    <ClientMotion 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="font-semibold text-indigo-600 mb-4">Backend & State</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                React Context
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Server Components
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                API Routes
                            </li>
                        </ul>
                    </ClientMotion>
                    <ClientMotion 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="font-semibold text-indigo-600 mb-4">E-commerce Features</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Shopping Cart
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Product Filtering
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Wishlist
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                    <ClientMotion 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Guitar Shop</h3>
                        <div className="text-indigo-600 mb-4">Next.js, TypeScript & Tailwind CSS</div>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Modern e-commerce platform with responsive design
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Dynamic product filtering and search functionality
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Shopping cart and wishlist with persistent storage
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Product categorization (Electric, Acoustic, Classical, Bass)
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <SocialLink 
                                href="https://github.com/froakie71/final_exam_portfolio"
                                icon={<CodeBracketIcon className="w-5 h-5" />}
                                text="Source Code"
                                external={true}
                            />
                            <SocialLink 
                                href="https://guitar-shop-demo.vercel.app"
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Website</h3>
                        <div className="text-indigo-600 mb-4">Next.js & Framer Motion</div>
                        <ul className="space-y-2 text-gray-600 mb-4">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Responsive design with smooth animations
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Server-side rendering for optimal performance
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                                Modern UI with Tailwind CSS
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
                <div className="bg-white p-6 rounded-lg shadow-sm">                    <h3 className="text-xl font-semibold text-gray-900 mb-2">BSc in Computer Science</h3>
                    <div className="text-indigo-600">AMA University</div>
                    <div className="text-gray-600">2023-Present</div>
                </div>
            </ClientMotionSection>
        </main>
    );
}
