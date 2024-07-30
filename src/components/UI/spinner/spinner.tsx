import React from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import Link from 'next/link'

function SpinnerUI() {
    const [showTimer, setShowTimer] = React.useState(true)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowTimer(false)
        }, 15000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            {showTimer ? (
                <Spinner />
            ) : (
                <div>
                    Your theme doesn't exist 😰
                    <br />
                    <div className="flex justify-center p-5">
                        <Button>
                            <Link href="/">Go to main</Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SpinnerUI
