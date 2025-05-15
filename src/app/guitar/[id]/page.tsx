'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Guitar } from '../../types';
import { guitars } from '../../data/guitars';
import ImageGallery from '../../components/ImageGallery';
import SocialShare from '../../components/SocialShare';

type Props = {
    params: {
        id: string;
    };
};

export default function GuitarDetail({ params }: Props) {
    const [project, setProject] = useState<Guitar | null>(null);
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        const projectData = guitars.find(g => g.id === params.id);
        if (projectData) {
            setProject(projectData);
        }
        // Set the current page URL for sharing
        if (typeof window !== 'undefined') {
            setPageUrl(window.location.href);
        }
    }, [params.id]);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <ImageGallery 
                            images={project.images || [project.imageUrl]}
                            productName={project.name}
                        />
                    </div>

                    <div className="space-y-6">
                        <Link href="/#projects" className="text-indigo-600 hover:text-indigo-500">
                            ← Back to projects
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{project.name}</h1>
                            <p className="text-lg text-gray-600">{project.brand}</p>
                        </div>
                        
                        <p className="text-gray-700">{project.description}</p>
                        
                        <div className="space-y-4">
                            <SocialShare 
                                url={pageUrl}
                                title={`Check out ${project.name}`}
                                description={project.description}
                                image={project.imageUrl}
                            />
                        </div>

                        {project.specs && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-lg font-medium mb-4">Technologies Used</h3>
                                <dl className="grid grid-cols-1 gap-4">
                                    {Object.entries(project.specs).map(([key, value]) => (
                                        <div key={key}>
                                            <dt className="font-medium text-gray-900">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </dt>
                                            <dd className="mt-1 text-gray-500">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
