import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileIcon } from '@/assets/icons/ProfileIcon.jsx'
import logo from '@/assets/images/logo.png'

export const Header = () => {
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
      </Stack>
    </Box>
  )
}
