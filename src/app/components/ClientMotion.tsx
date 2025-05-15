'use client';
import { useEffect, useState, ReactNode } from 'react';
import { motion, VariantLabels, Target } from 'framer-motion';

interface ClientProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    initial?: boolean | Target | VariantLabels;
    animate?: boolean | Target | VariantLabels;
    transition?: {
        duration?: number;
        delay?: number;
    };
    whileHover?: Target;
}

export function ClientMotion({ 
    children,
    className,
    initial,
    animate,
    transition,
    whileHover,
    onClick
}: ClientProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={className} onClick={onClick}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

export function ClientMotionSection({ 
    children,
    className,
    initial,
    animate,
    transition,
    whileHover,
    onClick
}: ClientProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <section className={className} onClick={onClick}>{children}</section>;
    }

    return (
        <motion.section
            className={className}
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
            onClick={onClick}
        >
            {children}
        </motion.section>
    );
}
