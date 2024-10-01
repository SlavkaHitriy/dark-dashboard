import { FormControl, MenuItem, Select } from '@mui/material'
import React, { memo, useEffect } from 'react'
import { ExpandMore } from '@mui/icons-material'
import { useField } from 'formik'

export const DefaultSelect = memo(({ sx, defaultValue = 'Active', name }) => {
  const [field, _, { setValue }] = useField(name)

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  return (
    <FormControl variant='standard' sx={{ width: '100%', alignItems: 'center', ...sx }}>
      <Select
        IconComponent={ExpandMore}
        sx={{
          width: '100%',
          border: '1px solid',
          borderColor: 'text.tertiary',
          borderRadius: '4px',
          height: 30,
          overflow: 'hidden',
          bgcolor: 'common.black',
          '&::before': {
            display: 'none',
          },
          '.MuiSelect-select': {
            py: '6px',
            fontSize: 14,
            pl: 1,
          },
          '& .MuiSelect-icon': {
            right: '8px',
            zIndex: 1,
            color: 'text.tertiary',
          },
          '.MuiInput-input': {
            paddingRight: '36px !important',
          },
        }}
        defaultValue={defaultValue}
        {...field}
      >
        <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
        <MenuItem value={`${defaultValue} 1`}>{defaultValue} 1</MenuItem>
        <MenuItem value={`${defaultValue} 2`}>{defaultValue} 2</MenuItem>
      </Select>
    </FormControl>
  )
})
