import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FormikProvider, useFormik } from 'formik'
import { DefaultIconButton } from '@/ui/DefaultIconButton/index.js'
import { ArrowsIcon } from '@/assets/icons/ArrowsIcon.jsx'
import { DefaultLink } from '@/ui/DefaultLink/index.js'
import { ArrowBackIcon } from '@/assets/icons/ArrowBackIcon.jsx'
import { PhoneIcon } from '@/assets/icons/PhoneIcon.jsx'
import { AccidentsIcon } from '@/assets/icons/AccidentsIcon.jsx'
import { BellIcon } from '@/assets/icons/BellIcon.jsx'
import { CircleChart } from '@/components/charts/CircleChart/CircleChart.jsx'
import { CloseIcon } from '@/assets/icons/CloseIcon.jsx'
import { TackIcon } from '@/assets/icons/TackIcon.jsx'
import { DefaultSelect } from '@/ui/DefaultSelect/index.js'
import { DefaultInput } from '@/ui/DefaultInput/index.js'

export const OrderManagementEdit = () => {
  const formik = useFormik({
    initialValues: {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '',
      field7: '',
      field8: '',
      field9: '',
      field10: '',
    },
    onSubmit: values => {
      console.log(values)
    },
    validateOnChange: false,
  })

  return (
    <FormikProvider value={formik}>
      <Stack width='100%' px={3} py={2}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={4} mb={2}>
          <Link to='/dashboard'>
            <Stack
              direction='row'
              alignItems='center'
              gap={1}
              sx={{
                '&:hover *': {
                  color: 'main',
                },
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  svg: {
                    color: 'main',
                  },
                }}
              >
                <ArrowBackIcon />
              </Box>
              <Typography
                variant='h4'
                sx={{
                  transition: 'color 0.15s',
                }}
              >
                Order Management
              </Typography>
            </Stack>
          </Link>
          <Stack direction='row' gap={5} alignItems='center'>
            <Stack direction='row' gap={3} alignItems='center'>
              <Stack direction='row' gap={1} alignItems='center'>
                <DefaultIconButton icon={<AccidentsIcon />} />
                <Typography>Accidents</Typography>
              </Stack>
              <Typography>Issues: 19</Typography>
              <Typography>Resolved: 180</Typography>
            </Stack>
            <Stack direction='row' gap={1.5}>
              <DefaultIconButton icon={<PhoneIcon />} />
              <DefaultIconButton icon={<ArrowsIcon />} />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' mb={3}>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography variant='h3'>Order ID 201923985981</Typography>
            <Stack direction='row' gap={1} alignItems='center' py={0.5} px={1} borderRadius='32px' bgcolor='background.secondary'>
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  svg: {
                    color: 'text.secondary',
                  },
                }}
              >
                <BellIcon />
              </Box>
              <Typography color='text.secondary'>00:55:23</Typography>
            </Stack>
          </Stack>
          <Stack direction='row' gap={1}>
            <Button variant='outlined' onClick={() => navigate('/order-management/edit')}>
              Edit
            </Button>
            <Button variant='outlined'>Generate Report</Button>
          </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap='120px' mb={8}>
          <Box
            sx={{
              maxWidth: '470px',
              width: '100%',
              borderRadius: '4px',
              bgcolor: 'background.primary',
              border: '1px solid',
              borderColor: 'background.tertiary',
              overflow: 'hidden',
            }}
          >
            <Stack p={2} gap={2} alignItems='center' direction='row' bgcolor='background.secondary'>
              <CircleChart simple />
              <Stack gap={0.5} flexGrow={1}>
                <Stack direction='row' gap={2} justifyContent='space-between' alignItems='center'>
                  <Typography>Current SLA Risk</Typography>
                  <Stack direction='row' gap={1} alignItems='center'>
                    <DefaultIconButton icon={<CloseIcon />} />
                    <DefaultIconButton icon={<TackIcon />} />
                  </Stack>
                </Stack>
                <Typography color='text.tertiary' maxWidth={235}>
                  Monetize all that 5G enables today. The revenue of 5G’s new capabilities.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction='row' px={2} py={3} alignItems='center' gap={3}>
              <Stack direction='row' alignItems='center' gap={1}>
                <Typography variant='h3'>231</Typography>
                <Typography
                  color='text.tertiary'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  Used <span>SLA Issues</span>
                </Typography>
              </Stack>
              <Stack direction='row' alignItems='center' gap={1}>
                <Typography variant='h3'>102</Typography>
                <Typography
                  color='text.tertiary'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  Remaining
                  <span>SLA Issues</span>
                </Typography>
              </Stack>
              <Button
                sx={{
                  ml: 'auto',
                }}
                variant='outlined'
              >
                See Transfers
              </Button>
            </Stack>
          </Box>
          <Box maxWidth={900} width='100%'>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Creation Date</Typography>
                  <Typography color='text.tertiary'>23/12/2019</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Account Status</Typography>
                  <Typography color='text.tertiary'>Normal</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>End Date</Typography>
                  <Typography color='text.tertiary'>23/12/2021</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Follow up after</Typography>
                  <Typography color='text.tertiary'>
                    <DefaultSelect
                      sx={{
                        maxWidth: '105px',
                        mb: -1,
                      }}
                      name='followAfter'
                      defaultValue='20:00h'
                    />
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Contract Name</Typography>
                  <Typography color='text.tertiary'>
                    <DefaultLink to='/dashboard'>SUPERTEL-WE-201902737</DefaultLink>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Identification</Typography>
                  <Typography color='text.tertiary'>ITH0283057101</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Group</Typography>
                  <Typography color='text.tertiary'>SMS2019-58178</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Connections</Typography>
                  <Typography color='text.tertiary'>Established</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Billing Address</Typography>
                  <Typography color='text.tertiary'>SE, Stockholm</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Allowance Sharing</Typography>
                  <Typography color='text.tertiary'>Normal</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack gap={0.5}>
                  <Typography>Fault Priority</Typography>
                  <Typography color='text.tertiary'>0 (no priority)</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
        <Stack p={3} gap={3} borderRadius='8px' border='1px solid' borderColor='background.tertiary'>
          <Box>
            <Grid container columnSpacing={1.5} rowSpacing={3}>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 1' name='field1' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 2' name='field2' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 3' name='field3' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 4' name='field4' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 5' name='field5' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 6' name='field6' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 7' name='field7' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 8' name='field8' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 9' name='field9' />
              </Grid>
              <Grid item xs={4}>
                <DefaultInput label='Field Title 10' name='field10' />
              </Grid>
            </Grid>
          </Box>
          <Box height='1px' bgcolor='background.tertiary' />
          <Stack direction='row' gap={1.5} justifyContent='flex-end'>
            <Button sx={{ maxWidth: 155, bgcolor: 'common.black' }} variant='contained'>
              Cancel
            </Button>
            <Button sx={{ maxWidth: 155, bgcolor: 'main' }} variant='contained'>
              Save
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </FormikProvider>
  )
}
