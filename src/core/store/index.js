import { atom } from 'recoil'

export const sidebarOpened = atom({
  key: 'IsOpenedSidebar',
  default: true,
})

export const sidebarVisible = atom({
  key: 'IsVisibleSidebar',
  default: false,
})
