import React from 'react'
import { alpha, Box, Popper, Stack, Typography, useTheme } from '@mui/material'
import { PieChart, useItemTooltip, useMouseTracker } from '@mui/x-charts'
import { generateVirtualElement } from '@mui/x-charts/ChartsTooltip/utils.js'
import { theme } from '@/core/theme/theme.js'

const tempData = [
  {
    label: 'PP',
    value: 29,
    color: theme.palette.accents.turquoise,
  },
  {
    label: 'IA',
    value: 9,
    color: theme.palette.accents.purple,
  },
  {
    label: 'TT',
    value: 28,
    color: theme.palette.text.primary,
  },
  {
    label: 'LM',
    value: 10,
    color: theme.palette.accents.peach,
  },
]

const filters = [
  ...tempData.map(item => ({
    label: item.label,
    color: item.color,
  })),
  {
    label: 'ALL',
    color: theme.palette.accents.gray,
  },
]

const CustomTooltip = () => {
  const theme = useTheme()
  const tooltipData = useItemTooltip()
  const mousePosition = useMouseTracker()

  if (!tooltipData || !mousePosition) return null

  const isMousePointer = mousePosition?.pointerType === 'mouse'
  const yOffset = isMousePointer ? 0 : 40 - mousePosition.height

  return (
    <Popper
      sx={{
        pointerEvents: 'none',
        zIndex: 1000,
      }}
      open
      placement={isMousePointer ? 'top-end' : 'top'}
      anchorEl={generateVirtualElement(mousePosition)}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, yOffset],
          },
        },
      ]}
    >
      <Stack bgcolor={alpha(theme.palette.common.black, 0.85)} p={1.5} gap={1.5}>
        <Stack gap={1}>
          <Typography pb={0.5} borderBottom='1px solid' borderColor='common.white'>
            SLA per source
          </Typography>
          {tempData.map((seriesItem, idx) => (
            <Stack direction='row' key={`${seriesItem.label}-${idx}`} gap={0.5} alignItems='center'>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: seriesItem.color,
                }}
              />
              <Stack direction='row' gap='100px' flexGrow={1} justifyContent='space-between'>
                <Typography>{seriesItem.label}</Typography>
                <Typography>{seriesItem.value}%</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Popper>
  )
}

export const CircleChart = ({ simple }) => {
  const theme = useTheme()
  const [data, setData] = React.useState(tempData)
  const [activeFilter, setActiveFilter] = React.useState(null)

  const handleFilterClick = filter => {
    if (filter.label === activeFilter?.label) {
      setData(tempData)
      setActiveFilter(null)
      return
    }

    if (filter.label === 'ALL') {
      setData(tempData)
      setActiveFilter(filter)
      return
    }

    setActiveFilter(filter)
    setData(tempData.filter(item => item.label === filter.label))
  }

  return (
    <Stack>
      {!simple && (
        <Stack direction='row' gap={1} mb={-2} position='relative' zIndex={10} flexWrap='wrap'>
          {filters.map(filter => (
            <Stack
              py={0.5}
              px={1}
              key={filter.label}
              direction='row'
              alignItems='center'
              gap={1}
              borderRadius='32px'
              border='1px solid'
              borderColor='text.tertiary'
              onClick={() => handleFilterClick(filter)}
              sx={{
                cursor: 'pointer',
                transition: 'background-color 0.15s',
                '&:hover': {
                  bgcolor: filter.label === activeFilter?.label ? 'accents.darkPeach' : 'background.tertiary',
                },
                bgcolor: filter.label === activeFilter?.label ? 'accents.darkPeach' : 'transparent',
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: filter.color,
                  flexShrink: 0,
                }}
              />
              <Typography>{filter.label}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
      <Stack
        sx={{
          mt: -1,
          mb: -1.5,
          ...(simple && {
            mx: -7,
            my: -6.5,
          }),
        }}
        alignItems='center'
        position='relative'
      >
        <PieChart
          width={simple ? 165 : 380}
          height={simple ? 165 : 380}
          sx={{
            transform: 'translateX(50px)',
            '.MuiPieArc-root': {
              stroke: theme.palette.background.secondary,
              strokeWidth: simple ? 1 : 1.5,
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
            popper: {
              hidden: simple,
            },
          }}
          series={[
            {
              data,
              innerRadius: simple ? 23 : 115,
            },
          ]}
          slots={{
            popper: simple ? null : CustomTooltip,
          }}
        />

        <Stack
          position='absolute'
          left='50%'
          top='50%'
          gap={1}
          sx={{
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography color='text.primary' variant={simple ? 'bodyMedium' : 'h2'}>
            {data.reduce((acc, item) => acc + item.value, 0)}%
          </Typography>
          {!simple && <Typography color='text.secondary'>Current SLA RISK</Typography>}
        </Stack>
      </Stack>
    </Stack>
  )
}
