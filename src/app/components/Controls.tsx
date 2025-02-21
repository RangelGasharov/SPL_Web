import { useStore } from '../../hooks/useStore';

export default function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return (<button onClick={increasePopulation}>one up</button>)
}