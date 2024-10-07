import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { DefaultInput } from '@/ui/DefaultInput/index.js'
import logo from '@/assets/images/logo.png'

export const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
    },
    validateOnChange: false,
  })

  return (
    <FormikProvider value={formik}>
      <Stack width='100%' height='100%' alignItems='center' justifyContent='center' px={2}>
        <Stack maxWidth={420} width='100%' gap={3} p={3} bgcolor='background.secondary' borderRadius='8px'>
          <Box
            sx={{
              width: 211,
              height: 52,
              m: '0 auto',
            }}
            src={logo}
            component='img'
          />
          <Stack alignItems='center' gap={1.5} mb={1} mt={5}>
            <Typography variant='h2'>Log in</Typography>
            <Typography>Hi! Welcome back, let’s get to work.</Typography>
          </Stack>
          <DefaultInput
            sx={{
              'input.MuiInput-input': {
                bgcolor: 'background.tertiary',
              },
            }}
            label='Email'
            name='email'
            placeholder='example@techservices.com'
          />
          <Stack>
            <DefaultInput
              sx={{
                'input.MuiInput-input': {
                  bgcolor: 'background.tertiary',
                },
              }}
              label='Password'
              name='password'
              placeholder='************'
            />
            <Stack
              mt={1}
              alignItems='flex-end'
              sx={{
                'a:hover *': {
                  color: 'accents.peach',
                },
              }}
            >
              <Link to='/forgot-password'>
                <Typography
                  sx={{
                    transition: 'color 0.15s',
                  }}
                  variant='footnote'
                >
                  Forgot password?
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <Button sx={{ bgcolor: 'main', mt: 1 }} variant='contained' onClick={() => navigate('/dashboard')}>
            Log in
          </Button>
        </Stack>
      </Stack>
    </FormikProvider>
  )
}
