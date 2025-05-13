'use client';
import { useState } from 'react';
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    EmailIcon,
    WhatsappIcon
} from './SocialIcons';

interface SocialShareProps {
    url: string;
    title: string;
    description?: string;
    image?: string;
}

const SocialShare = ({
    url,
    title,
    description = '',
    image = ''
}: SocialShareProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const encodeURL = (url: string) => encodeURIComponent(url);
    const encodedUrl = encodeURL(url);
    const encodedTitle = encodeURL(title);
    const encodedDescription = encodeURL(description);
    const encodedImage = encodeURL(image);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}&media=${encodedImage}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        const url = shareLinks[platform];
        window.open(url, '_blank', 'width=600,height=400');
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Share this guitar</h3>
            <div className="flex flex-wrap gap-4">
                <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                >
                    <FacebookIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                    aria-label="Share on Twitter"
                >
                    <TwitterIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                >
                    <LinkedinIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('pinterest')}
                    className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                    aria-label="Share on Pinterest"
                >
                    <PinterestIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                    aria-label="Share on WhatsApp"
                >
                    <WhatsappIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('email')}
                    className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                    aria-label="Share via Email"
                >
                    <EmailIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={copyToClipboard}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isCopied
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    {isCopied ? 'Copied!' : 'Copy Link'}
                </button>            </div>
        </div>
    );
};

export default SocialShare;
