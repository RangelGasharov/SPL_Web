import useEventListener from '@/hooks/useEventListener';
import React, { useState } from 'react'


export default function EventListenerComponent() {
    const [key, setKey] = useState("");
    useEventListener("keydown", e => {
        setKey(e.key)
    })
    return (
        <div>Last Key: {key}</div>
    )
}