'use client';
import { useState } from 'react';
import Hero from './components/Hero';
import GuitarCard from './components/GuitarCard';
import SearchAndFilter from './components/SearchAndFilter';
import AboutSection from './components/AboutSection';
import { guitars } from './data/guitars';
import GuitarCardSkeleton from './components/GuitarCardSkeleton';
import { Suspense } from 'react';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredGuitars = guitars.filter((guitar) => {
        const matchesSearch = guitar.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guitar.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guitar.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedCategory === 'all' || guitar.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen">
            <Hero />
            <section id="guitars" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Featured Guitars
                    </h2>
                    <SearchAndFilter 
                        onSearch={setSearchQuery}
                        onCategoryChange={setSelectedCategory}
                    />
                    <Suspense fallback={
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <GuitarCardSkeleton key={i} />
                            ))}
                        </div>
                    }>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGuitars.map((guitar) => (
                                <GuitarCard key={guitar.id} guitar={guitar} />
                            ))}
                        </div>
                    </Suspense>
                </div>
            </section>

            <AboutSection />

            <section id="contact" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <p className="text-gray-600 mb-6">
                                Have questions about our guitars or need expert advice? 
                                We're here to help you find your perfect instrument.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-600">info@guitarshop.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-600">(555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-600">123 Guitar Street, Music City</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const name = formData.get('name') as string;
                                    const email = formData.get('email') as string;
                                    const message = formData.get('message') as string;
                                    
                                    if (!name || !email || !message) {
                                        alert('Please fill in all fields');
                                        return;
                                    }
                                    
                                    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/)) {
                                        alert('Please enter a valid email address');
                                        return;
                                    }
                                    
                                    // Here you would typically send the form data to your server
                                    alert('Message sent successfully!');
                                    form.reset();
                                }} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        required
                                        minLength={2}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows={4} 
                                        required
                                        minLength={10}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
