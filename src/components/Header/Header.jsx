import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { ProfileIcon } from '@/assets/icons/ProfileIcon.jsx'
import logo from '@/assets/images/logo.png'
import { sidebarVisible } from '@/core/store/index.js'
import { DefaultIconButton } from '@/ui/DefaultIconButton/index.js'
import { BurgerIcon } from '@/assets/icons/BurgerIcon.jsx'
import { theme } from '@/core/theme/theme.js'
import { CloseIcon } from '@/assets/icons/CloseIcon.jsx'

export const Header = () => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisible)

  const handleBurgerClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <Box
      bgcolor='common.black'
      component='header'
      height={48}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px={3}
      flexShrink={0}
    >
      <Link to='/dash'>
        <Box
          sx={{
            width: 89,
            height: 22,
          }}
          src={logo}
          component='img'
        />
      </Link>
      <Stack direction='row' alignItems='center' gap={1}>
        <Box width={24} height={24} color='text.secondary'>
          <ProfileIcon />
        </Box>
        <Typography>BER2018-2</Typography>
        <DefaultIconButton
          sx={{
            [theme.breakpoints.up(768)]: {
              display: 'none',
            },
          }}
          size={32}
          className='burger'
          icon={isVisible ? <CloseIcon /> : <BurgerIcon />}
          onClick={handleBurgerClick}
        />
      </Stack>
    </Box>
  )
}
