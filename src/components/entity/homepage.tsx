'use client'

import { useCount } from '@/lib/store'

export const Homepage = () => {
    const { count, incrementCount, decrementCount } = useCount(
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
