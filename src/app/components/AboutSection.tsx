'use client';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Skills & Growth Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] w-full">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="Coding workspace with laptop"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                priority
                                quality={100}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            As a growing developer, I'm constantly working to enhance my skills across various areas. 
                            Currently focusing on deepening my expertise in modern web development technologies and 
                            exploring new frameworks.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            My goal is to become proficient in building scalable, performant applications 
                            while maintaining clean, maintainable code architecture.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">60%</div>
                                <div className="text-gray-600">Backend Development</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">85%</div>
                                <div className="text-gray-600">Frontend Mastery</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">70%</div>
                                <div className="text-gray-600">Testing Coverage</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">75%</div>
                                <div className="text-gray-600">DevOps Skills</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
