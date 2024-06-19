'use client'

import { useCounterStore } from '@/lib/providers/counter-store-provider'

export const Homepage = () => {
    const { count, incrementCount, decrementCount } = useCounterStore(
        (state: any) => state,
    )

    return (
        <div>
            Count: {count}
            <hr />
            <button type="button" onClick={() => void incrementCount()}>
                Increment Count
            </button>
            <button type="button" onClick={() => void decrementCount()}>
                Decrement Count
            </button>
        </div>
    )
}
