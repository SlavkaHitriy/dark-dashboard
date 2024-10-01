import { LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { DefaultIconButton } from '@/ui/DefaultIconButton/index.js'
import { DotsIcon } from '@/assets/icons/DotsIcon.jsx'

export const transactionsColumns = [
  {
    field: 'orderId',
    headerName: 'Order ID',
    width: 120,
  },
  {
    field: 'lineNumber',
    headerName: 'Line No',
    width: 100,
  },
  {
    field: 'partID',
    headerName: 'Part ID',
    width: 160,
  },
  {
    field: 'currentLoad',
    headerName: 'Current Load',
    width: 135,
    renderCell: ({ value }) => (
      <Stack direction='row' gap={1} alignItems='center' height='100%'>
        <LinearProgress
          sx={{
            width: 65,
            flexShrink: 0,
            height: 6,
            bgcolor: 'text.tertiary',
            '.MuiLinearProgress-bar': {
              bgcolor: 'text.primary',
            },
          }}
          variant='determinate'
          value={value}
        />
        <Typography color='text.secondary'>{value}%</Typography>
      </Stack>
    ),
  },
  {
    field: 'sourceLocation',
    headerName: 'Source Location',
    width: 150,
  },
  {
    field: 'sourceLevel',
    headerName: 'Source Level',
    width: 100,
  },
  {
    field: 'serviceLevel',
    headerName: 'Service Level',
    width: 105,
  },
  {
    field: 'gmmValue',
    headerName: 'GMM Value',
    width: 90,
  },
  {
    field: 'totalVolume',
    headerName: 'Total Volume',
    width: 100,
  },
  {
    field: 'menu',
    headerName: '',
    flex: 1,
    sortable: false,
    renderCell: () => (
      <Stack
        justifyContent='center'
        alignItems='flex-end'
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <DefaultIconButton icon={<DotsIcon />} />
      </Stack>
    ),
  },
]

export const transactionsRows = [
  {
    id: 1,
    orderId: 'AB-00032734',
    lineNumber: '512-5719',
    partID: 'X60 BJGJ29839281',
    currentLoad: 88,
    sourceLocation: 'US. Denver - 24071',
    sourceLevel: '66%',
    serviceLevel: '4/10',
    gmmValue: '59.99',
    totalVolume: '10.9985',
  },
  {
    id: 2,
    orderId: 'AB-00032734',
    lineNumber: '512-5719',
    partID: 'X60 BJGJ29839281',
    currentLoad: 88,
    sourceLocation: 'US. Denver - 24071',
    sourceLevel: '66%',
    serviceLevel: '4/10',
    gmmValue: '59.99',
    totalVolume: '10.9985',
  },
  {
    id: 3,
    orderId: 'AB-00032734',
    lineNumber: '512-5719',
    partID: 'X60 BJGJ29839281',
    currentLoad: 88,
    sourceLocation: 'US. Denver - 24071',
    sourceLevel: '66%',
    serviceLevel: '4/10',
    gmmValue: '59.99',
    totalVolume: '10.9985',
  },
  {
    id: 4,
    orderId: 'AB-00032734',
    lineNumber: '512-5719',
    partID: 'X60 BJGJ29839281',
    currentLoad: 88,
    sourceLocation: 'US. Denver - 24071',
    sourceLevel: '66%',
    serviceLevel: '4/10',
    gmmValue: '59.99',
    totalVolume: '10.9985',
  },
]
