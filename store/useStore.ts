import { create } from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  activeSection: string
  isMenuOpen: boolean
  setTheme: (theme: 'light' | 'dark') => void
  setActiveSection: (section: string) => void
  toggleMenu: () => void
  closeMenu: () => void
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  activeSection: 'hero',
  isMenuOpen: false,
  setTheme: (theme) => set({ theme }),
  setActiveSection: (section) => set({ activeSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))