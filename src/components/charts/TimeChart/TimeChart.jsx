import { BarChart } from '@mui/x-charts/BarChart'
import React from 'react'
import { alpha, Box, Popper, Stack, Typography, useTheme } from '@mui/material'
import { chartsGridClasses, useAxisTooltip, useMouseTracker } from '@mui/x-charts'
import { generateVirtualElement } from '@mui/x-charts/ChartsTooltip/utils.js'

const uDataTemp = new Array(30).fill(0).map(_ => +(Math.random() * 1000).toFixed())
const pDataTemp = new Array(30).fill(0).map(_ => +(Math.random() * 1000).toFixed())
const xLabelsTemp = new Array(30).fill(0).map((_, i) => i)
const timeFilters = [
  {
    label: '< 0.5h',
    minValue: 0,
    maxValue: 0.5,
    color: 'accents.turquoise',
  },
  {
    label: '0.5-1h',
    minValue: 0.5,
    maxValue: 1,
    color: 'main',
  },
  {
    label: '1-3h',
    minValue: 1,
    maxValue: 3,
    color: 'accents.purple',
  },
  {
    label: '3-6h',
    minValue: 3,
    maxValue: 6,
    color: 'accents.peach',
  },
  {
    label: '6-24h',
    minValue: 6,
    maxValue: 24,
    color: 'accents.lightRed',
  },
  {
    label: 'over 24h',
    minValue: 24,
    color: 'accents.red',
  },
]

const CustomTooltip = () => {
  const theme = useTheme()
  const tooltipData = useAxisTooltip()
  const mousePosition = useMouseTracker()

  if (!tooltipData || !mousePosition || tooltipData.seriesItems.find(item => item.value === null)) return null

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
            [AB-809100-13]
          </Typography>
          {tooltipData.seriesItems.map((seriesItem, idx) => (
            <Stack direction='row' key={`${seriesItem.seriesId}-${idx}`} gap={0.5} alignItems='center'>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: seriesItem.color,
                }}
              />
              <Stack direction='row' gap={4} flexGrow={1} justifyContent='space-between'>
                <Typography>{seriesItem.formattedLabel}</Typography>
                <Typography>{seriesItem.value}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Popper>
  )
}

export const TimeChart = () => {
  const theme = useTheme()
  const [uData, setUData] = React.useState(uDataTemp)
  const [pData, setPData] = React.useState(pDataTemp)
  const [xLabels, setXLabels] = React.useState(xLabelsTemp)
  const [activeFilter, setActiveFilter] = React.useState(null)

  const handleFilterClick = filter => {
    if (filter.label === activeFilter?.label) {
      setActiveFilter(null)
      setXLabels(xLabelsTemp)
      setUData(uDataTemp)
      setPData(pDataTemp)
      return
    }

    setActiveFilter(filter)
    const sliceMinValue = Math.floor(filter.minValue)
    const sliceMaxValue = filter.maxValue + (filter.maxValue - filter.minValue > 1 ? 1 : 0)

    if (filter.maxValue) {
      setXLabels(xLabelsTemp.filter(i => i >= filter.minValue && i <= filter.maxValue))
      setUData([...uDataTemp].slice(sliceMinValue, sliceMaxValue))
      setPData([...pDataTemp].slice(sliceMinValue, sliceMaxValue))
    } else {
      setXLabels(xLabelsTemp.filter(i => i >= filter.minValue))
      setUData([...uDataTemp].slice(sliceMinValue))
      setPData([...pDataTemp].slice(sliceMinValue))
    }
  }

  return (
    <Stack>
      <Stack direction='row' gap={1} mb={-2} position='relative' zIndex={10} flexWrap='wrap'>
        {timeFilters.map(filter => (
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
      <Box maxWidth={560} width='100%' mt={-2} mb={-4}>
        <Box display='flex' justifyContent='center' alignItems='center' width='calc(100% + 90px)' height={400}>
          <BarChart
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            series={[
              { data: pData, label: 'Sessions Trans.', id: 'transId', stack: 'total', color: theme.palette.accents.darkPeach },
              {
                data: uData,
                label: 'Sessions Ovr.',
                id: 'ovrId',
                stack: 'total',
                color: theme.palette.background.tertiary,
              },
            ]}
            leftAxis={null}
            grid={{
              vertical: true,
            }}
            xAxis={[
              {
                data: xLabels,
                scaleType: 'band',
                tickInterval: (value, index) => (activeFilter ? index : index === 0 || value % 5 === 0),
                tickLabelPlacement: 'tick',
              },
            ]}
            sx={{
              ml: -11,
              '& .MuiChartsAxis-line': {
                stroke: `${theme.palette.accents.darkPeach} !important`,
                transform: 'translateY(2px)',
              },
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: '5 3',
                strokeWidth: 1,
                stroke: theme.palette.text.tertiary,
                '&:first-of-type': {
                  strokeDasharray: 'none',
                  stroke: theme.palette.common.white,
                },
              },
            }}
            slots={{
              popper: CustomTooltip,
            }}
          />
        </Box>
      </Box>
    </Stack>
  )
}
