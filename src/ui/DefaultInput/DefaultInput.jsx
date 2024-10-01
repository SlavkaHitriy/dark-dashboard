import { Box, TextField } from '@mui/material'
import React, { memo } from 'react'
import { useField } from 'formik'

export const DefaultInput = memo(({ label, placeholder, sx, ...otherProps }) => {
  const [field, meta] = useField(otherProps.name)
  console.log('field error', meta.error)

  return (
    <Box position='relative' width='100%'>
      <TextField
        label={label}
        variant='standard'
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={placeholder}
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: '6px',
          '.MuiInputLabel-root': {
            fontSize: 14,
            fontWeight: 500,
            color: 'text.primary',
            transform: 'unset',
            position: 'static',
            mb: 1,
          },
          '.MuiInput-input': {
            fontSize: 14,
            height: 52,
            py: 0,
            pr: 2,
            pl: 2,
            borderRadius: '8px',
            bgcolor: 'background.secondary',
          },
          '.MuiInputBase-root': {
            mt: 0,
            py: 0,
            '&::before': {
              border: 'none',
            },
            '&.Mui-disabled': {
              '&::before': {
                display: 'none',
              },
            },
          },
          ...sx,
        }}
        {...otherProps}
        {...field}
      />
    </Box>
  )
})
