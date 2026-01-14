"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
}

export function useCountUp(
    ref: React.RefObject<HTMLElement>,
    { end, duration = 2000, start = 0, decimals = 0, suffix = "", prefix = "" }: UseCountUpOptions
) {
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView || hasAnimated) return;

        setHasAnimated(true);
        const startTime = Date.now();
        const endTime = startTime + duration;

        const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Easing function - easeOutExpo
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = start + (end - start) * easeOutExpo;

            setCount(currentValue);

            if (now < endTime) {
                requestAnimationFrame(tick);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(tick);
    }, [isInView, end, duration, start, hasAnimated]);

    const formattedCount = decimals > 0 
        ? count.toFixed(decimals) 
        : Math.floor(count).toLocaleString();

    return `${prefix}${formattedCount}${suffix}`;
}
