import { Guitar } from '../types';

export const guitars: Guitar[] = [
    {
        id: '1',
        name: 'Weather App',
        brand: 'Flutter Project',
        category: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'A beautiful weather application built with Flutter, featuring real-time weather data and dynamic backgrounds.',
        specs: {
            framework: 'Flutter',
            language: 'Dart',
            features: 'Real-time weather updates, Dynamic UI, Location services',
            platform: 'iOS & Android',
            architecture: 'BLoC Pattern'
        }
    },
    {
        id: '2',
        name: 'E-commerce Website',
        brand: 'React Project',
        category: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80',
        description: 'A full-featured e-commerce platform built with React and Firebase, including user authentication and Stripe payments.',
        specs: {
            frontend: 'React.js',
            backend: 'Firebase',
            database: 'Cloud Firestore',
            authentication: 'Firebase Auth',
            payments: 'Stripe Integration'
        }
    },
    {
        id: '3',
        name: 'Portfolio Website',
        brand: 'Next.js Project',
        category: 'web',
        imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2555&q=80',
        description: 'My personal portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.',
        specs: {
            framework: 'Next.js 14',
            styling: 'Tailwind CSS',
            animations: 'Framer Motion',
            deployment: 'Vercel',
            features: 'Server Components, TypeScript'
        }
    },
    {
        id: '4',
        name: 'Task Manager',
        brand: 'Flutter Project',
        category: 'mobile',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80',
        description: 'A task management application built with Flutter, featuring clean UI and local storage capabilities.',
        specs: {
            framework: 'Flutter',
            storage: 'SQLite',
            stateManagement: 'Provider',
            ui: 'Material Design 3',
            platform: 'Cross-platform'
        }
    }
];
