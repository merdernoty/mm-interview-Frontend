import clsx from 'clsx'

import { CSSProperties, FC, ReactNode } from 'react'

type TContainer = {
    children: ReactNode
    additionalStyles?: string
    style?: CSSProperties
}

const HomePageContainer: FC<TContainer> = ({
    children,
    additionalStyles = '',
    style = {},
}) => {
    return (
        <div
            className={clsx(
                'max-w-screen-2xl mx-auto px-5 flex-grow',
                additionalStyles,
            )}
            style={style}
        >
            {children}
        </div>
    )
}

export default HomePageContainer
