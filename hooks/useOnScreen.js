import { useState, useEffect } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  //
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin,
        threshold: 0.5,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run mount
  return isIntersecting;
}

export default useOnScreen;
