import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IPostField } from '../shared/postField.interface.ts'

interface IPostsStore {
    posts: IPostField[] | []
    addPost: (value: IPostField) => void
}

export const usePostsStore = create<IPostsStore>()(
    devtools(
        (set) => ({
            posts: [],
            addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
        }),
        { store: 'PostStore' },
    ),
)
