'use client';
import { createContext, useContext, useState } from 'react';
import Notification from '../components/Notification';

interface NotificationContextType {
    showNotification: (message: string, type: 'success' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextType>({
    showNotification: () => {},
});

export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'error'>('success');

    const showNotification = (message: string, type: 'success' | 'error') => {
        setMessage(message);
        setType(type);
        setShow(true);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <Notification
                show={show}
                setShow={setShow}
                type={type}
                message={message}
            />
        </NotificationContext.Provider>
    );
}
