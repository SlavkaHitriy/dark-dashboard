import { IconButton } from '@mui/material'
import React from 'react'

export const DefaultIconButton = ({ icon, size = 24, sx, ...otherProps }) => {
  return (
    <IconButton
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'background-color 0.15s',
        p: '2px',
        width: size,
        height: size,
        borderRadius: '4px',
        '&:hover': {
          bgcolor: 'background.tertiary',
        },
        ...sx,
      }}
      {...otherProps}
    >
      {icon}
    </IconButton>
  )
}
