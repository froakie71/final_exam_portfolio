'use client';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    About Our Guitar Shop
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] w-full">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200">                            <Image
                                src="https://images.unsplash.com/photo-1568663041326-6348c761f7af?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Guitar Shop Interior with Wall of Guitars"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                priority
                                quality={100}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Welcome to Guitar Shop, your premier destination for high-quality
                            guitars and musical equipment. With years of experience in the industry,
                            we pride ourselves on offering expert guidance and an exceptional
                            collection of instruments.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Our team of passionate musicians and guitar experts is dedicated to
                            helping you find the perfect instrument that matches your style and needs.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">1000+</div>
                                <div className="text-gray-600">Guitars Sold</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">98%</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
