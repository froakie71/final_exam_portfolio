'use client';

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
    external?: boolean;
}

export function SocialLink({ href, icon, text, external = false }: SocialLinkProps) {
    const linkProps = external ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    return (
        <a 
            href={href}
            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
            {...linkProps}
        >
            {icon}
            <span>{text}</span>
        </a>
    );
}
