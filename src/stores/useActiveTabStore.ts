import { create } from 'zustand'

export const useActiveTabStore = create((set) => ({
    key: 0,
    setSelectedTab: (selectedTab: number) => set(() => ({ key: selectedTab })),
}))
