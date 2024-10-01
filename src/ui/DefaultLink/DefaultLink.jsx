import { Link, Typography } from '@mui/material'
import React from 'react'

export const DefaultLink = ({ to, sx, children, ...otherProps }) => {
  return (
    <Link
      href={to}
      sx={{
        textDecoration: 'none',
        ...sx,
      }}
      {...otherProps}
    >
      <Typography
        color='main'
        sx={{
          transition: 'color 0.15s',
          '&:hover': {
            color: 'accents.peach',
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  )
}
