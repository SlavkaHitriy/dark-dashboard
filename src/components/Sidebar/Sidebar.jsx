import { Stack } from '@mui/material'
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { SidebarItem } from '@/components/Sidebar/SidebarItem.jsx'
import { mainMenu, systemMenu } from './data/menu.jsx'
import { sidebarOpened, sidebarVisible } from '@/core/store/index.js'
import { theme } from '@/core/theme/theme.js'
import { useClickOutside } from '@/hooks/useClickOutside.js'

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useRecoilState(sidebarOpened)
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisible)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setIsOpened(prev => !prev)
  }

  useClickOutside(sidebarRef, () => {
    setIsVisible(false)
  })

  return (
    <Stack
      ref={sidebarRef}
      component='aside'
      width={isOpened ? 256 : 100}
      flexShrink={0}
      bgcolor='background.primary'
      position='relative'
      zIndex={11}
      sx={{
        transition: 'all 0.3s ease',
        [theme.breakpoints.down(768)]: {
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          display: isVisible ? 'flex' : 'none',
        },
      }}
    >
      <Stack
        flex={1}
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            width: '4px',
            bgcolor: 'neutral.400',
          },
        }}
      >
        <Stack mb={3}>
          <SidebarItem toggleSidebar={toggleSidebar} isOpened={isOpened} isBurger />
          {mainMenu.map(item => (
            <SidebarItem isOpened={isOpened} key={item.title} data={item} />
          ))}
        </Stack>
        <Stack mt='auto' pb={2}>
          {systemMenu.map(item => (
            <SidebarItem isOpened={isOpened} key={item.title} data={item} isBottom />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
