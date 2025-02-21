import { useStore } from '../../hooks/useStore';

export default function Counter() {
    const bears = useStore((state) => state.bears)
    return (<h1>{bears} around here...</h1>)
}