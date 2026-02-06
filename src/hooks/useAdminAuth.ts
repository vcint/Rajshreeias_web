"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAdminAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/admin/verify');
            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                router.push('/admin/login');
            }
        } catch (error) {
            setIsAuthenticated(false);
            router.push('/admin/login');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' });
            sessionStorage.removeItem('admin_token');
            setIsAuthenticated(false);
            router.push('/admin/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return { isAuthenticated, isLoading, logout };
}