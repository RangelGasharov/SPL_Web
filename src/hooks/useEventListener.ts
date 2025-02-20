import { useEffect, useRef } from "react";

export default function useEventListener(eventType: string, callback, element = window) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const handler = (e: Event) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element])
}