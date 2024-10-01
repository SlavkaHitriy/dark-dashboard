import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { DefaultIconButton } from '@/ui/DefaultIconButton/index.js'
import { ArrowsIcon } from '@/assets/icons/ArrowsIcon.jsx'
import { FilterIcon } from '@/assets/icons/FilterIcon.jsx'
import { DotsIcon } from '@/assets/icons/DotsIcon.jsx'
import { DefaultLink } from '@/ui/DefaultLink/index.js'
import { TimeChart } from '@/components/charts/TimeChart/TimeChart.jsx'
import { CircleChart } from '@/components/charts/CircleChart/CircleChart.jsx'
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js'
import { FunnelIcon } from '@/assets/icons/FunnelIcon.jsx'
import { transactionsColumns, transactionsRows } from '@/modules/MyDashboard/data/transactions.jsx'

export const MyDashboard = () => {
  return (
    <Stack width='100%' px={3} py={2}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' gap={4} mb={2}>
        <Typography variant='h4'>My Dashboard</Typography>
        <Stack direction='row' gap={1.5}>
          <DefaultIconButton icon={<ArrowsIcon />} />
          <DefaultIconButton icon={<FilterIcon />} />
        </Stack>
      </Stack>
      <Stack direction='row' mb={2} gap={2}>
        <Stack p={2} gap={3} borderRadius='4px' bgcolor='background.secondary' flexGrow={1} maxWidth={400}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
            <Typography>Main KPIs</Typography>
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
          <Stack direction='row' gap={3}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Typography variant='h2'>2351</Typography>
              <Typography display='flex' flexDirection='column' color='text.tertiary'>
                <span>BSS</span> <span>KPIs</span>
              </Typography>
            </Stack>
            <Stack direction='row' gap={1} alignItems='center'>
              <Typography variant='h2'>235</Typography>
              <Typography display='flex' flexDirection='column' color='text.tertiary'>
                <span>PDP</span> <span>KPIs</span>
              </Typography>
            </Stack>
            <Stack direction='row' gap={1} alignItems='center'>
              <Typography variant='h2'>11</Typography>
              <Typography display='flex' flexDirection='column' color='text.tertiary'>
                <span>Network</span> <span>KPIs</span>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack p={2} gap={3} borderRadius='4px' bgcolor='background.secondary' flexGrow={1}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
            <Typography>Transaction Details</Typography>
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
          <Stack direction='row' gap={2} justifyContent='space-between' alignItems='center'>
            <Stack direction='row' gap={3}>
              <Stack direction='row' gap={1} alignItems='center'>
                <Typography variant='h2'>157</Typography>
                <Typography display='flex' flexDirection='column' color='text.tertiary'>
                  <span>Open</span> <span>Orders</span>
                </Typography>
              </Stack>
              <Stack direction='row' gap={1} alignItems='center'>
                <Typography color='accents.peach' variant='h2'>
                  61
                </Typography>
                <Typography display='flex' flexDirection='column' color='text.tertiary'>
                  <span>Risky</span> <span>Orders</span>
                </Typography>
              </Stack>
              <Stack direction='row' gap={1} alignItems='center'>
                <Typography variant='h2'>16</Typography>
                <Typography display='flex' flexDirection='column' color='text.tertiary'>
                  <span>Awaiting</span> <span>Orders</span>
                </Typography>
              </Stack>
              <Stack direction='row' gap={1} alignItems='center'>
                <Typography variant='h2'>8</Typography>
                <Typography display='flex' flexDirection='column' color='text.tertiary'>
                  <span>Canceled</span> <span>Orders</span>
                </Typography>
              </Stack>
            </Stack>
            <DefaultLink to='/'>See Details</DefaultLink>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='row' gap={2} mb={2}>
        <Stack p={2} gap={1.5} borderRadius='4px' bgcolor='background.secondary' flexGrow={1}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
            <Typography>Overdue MPA</Typography>
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
          <TimeChart />
          <Typography mt={1} textAlign='right' variant='footnote'>
            Overdue in hours
          </Typography>
        </Stack>
        <Stack p={2} gap={1.5} borderRadius='4px' bgcolor='background.secondary' flexGrow={1}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
            <Typography>Risk of SLA</Typography>
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
          <CircleChart />
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='footnote'>Avg. 2% deviation</Typography>
            <Typography variant='footnote'>Aprox. 5 minute delay</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack p={2} gap={2} borderRadius='4px' bgcolor='background.secondary' flexGrow={1}>
        <Stack direction='row' gap={3} justifyContent='space-between' alignItems='center'>
          <Stack direction='row' gap={1} alignItems='center'>
            <Box>
              <FunnelIcon />
            </Box>
            <Box
              sx={{
                width: '1px',
                height: 24,
                bgcolor: 'text.primary',
              }}
            />
            <Typography>List of transactions</Typography>
          </Stack>
          <Stack direction='row' gap={1.5}>
            <DefaultIconButton icon={<FilterIcon />} />
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
        </Stack>
        <Stack direction='row' gap={3}>
          <DefaultLink to='/'>SMS X</DefaultLink>
          <DefaultLink to='/'>2017 X</DefaultLink>
          <DefaultLink to='/'>DAY X</DefaultLink>
          <DefaultLink to='/'>AB X</DefaultLink>
          <DefaultLink to='/'>PDP X</DefaultLink>
          <DefaultLink to='/'>PDP X</DefaultLink>
          <DefaultLink to='/'>SCG X</DefaultLink>
          <DefaultLink to='/'>4GSM X</DefaultLink>
        </Stack>
        <DefaultDataGrid
          sx={{
            ml: -2,
            mb: -2,
            mr: -2,
          }}
          rows={transactionsRows}
          columns={transactionsColumns}
          pageItems={3}
        />
      </Stack>
    </Stack>
  )
}
