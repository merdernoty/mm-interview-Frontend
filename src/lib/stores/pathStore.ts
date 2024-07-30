import create from 'zustand'

interface PathState {
    isAuthorizing: boolean
    isChatting: boolean
    //isInUser:boolean;
    updatePathState: (path: string) => void
}

export const usePath = create<PathState>((set) => ({
    isAuthorizing: false,
    isChatting: false,
    //isInUser:false,
    updatePathState: (path) =>
        set({
            isAuthorizing: path.startsWith('/auth'),
            isChatting: path.startsWith('/chat'),
            //isInUser: path.startsWith('/user'),
        }),
}))
export default usePath
