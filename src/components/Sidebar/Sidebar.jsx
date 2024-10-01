import { Stack } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil'
import { SidebarItem } from '@/components/Sidebar/SidebarItem.jsx'
import { mainMenu, systemMenu } from './data/menu.jsx'
import { sidebarOpened } from '@/core/store/index.js'

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useRecoilState(sidebarOpened)

  const toggleSidebar = () => {
    setIsOpened(prev => !prev)
  }

  return (
    <Stack
      component='aside'
      width={isOpened ? 256 : 100}
      flexShrink={0}
      bgcolor='background.primary'
      position='relative'
      zIndex={11}
      sx={{
        transition: 'all 0.3s ease',
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
