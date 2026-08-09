import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to a ref and flips `isVisible` once the
 * element enters the viewport. Used to stagger the landing page's sections
 * in on scroll — a one-time reveal, not a scroll-jacking effect.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
