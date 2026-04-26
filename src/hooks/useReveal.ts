import { useEffect, useRef } from "react";

export const useReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("in");

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const isHashTarget = window.location.hash && el.matches(window.location.hash);
    const rect = el.getBoundingClientRect();
    const isAlreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isHashTarget || isAlreadyInView) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "120px 0px 120px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};
