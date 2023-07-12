import { useRef, useState, RefObject, useEffect, useCallback } from "react";

interface useIsInViewportReturn {
  ref: RefObject<HTMLDivElement>;
  value: boolean;
}

export const useIsInViewport = (): useIsInViewportReturn => {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const calculate = useCallback(() => {
    if ( !ref || !ref.current ) return;
    const rect = ref.current.getBoundingClientRect();

    setValue((
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
      rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
    ));
  }, [ref]);

  const addListener = useCallback(() => {
    document.addEventListener("scroll", calculate)
  }, [calculate])

  const removeListener = useCallback(() => {
    document.removeEventListener("scroll", calculate)
  }, [calculate])


  useEffect(() => {
    calculate();
    addListener()
    return () => removeListener();
  }, [calculate, addListener, removeListener])

  return { ref, value };
}
