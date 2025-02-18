"use client"
import { useState, useEffect } from "react";

function getSavedValue(key: string, initialValue) {
    const savedValue: string = JSON.parse(localStorage.getItem(key));
    if (initialValue instanceof Function) return initialValue();
    if (savedValue) return savedValue;
    return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]);

    return [value, setValue];
}