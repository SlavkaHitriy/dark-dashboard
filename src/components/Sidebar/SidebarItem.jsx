import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CloseIcon } from '@/assets/icons/CloseIcon.jsx'
import { ArrowIcon } from '@/assets/icons/ArrowIcon.jsx'
import { BurgerIcon } from '@/assets/icons/BurgerIcon.jsx'
import { DashboardIcon } from '@/assets/icons/DashboardIcon.jsx'

export const SidebarItem = ({ data, isOpened, isBurger, toggleSidebar, isBottom }) => {
  const [isOpenedInner, setIsOpenedInner] = React.useState(false)
  const arrowRef = React.useRef(null)

  const handleArrowClick = e => {
    if (e.target === arrowRef.current) {
      e.preventDefault()
      setIsOpenedInner(prev => !prev)
    }
  }

  return isBurger ? (
    <Stack
      sx={{
        cursor: 'pointer',
        transition: 'background 0.15s',
        '&:hover': {
          bgcolor: 'background.secondary',
        },
      }}
      direction='row'
      px={3}
      py={1.5}
      gap={1}
      justifyContent={!isOpened && 'center'}
      alignItems='center'
      onClick={toggleSidebar}
    >
      <Box
        width={24}
        height={24}
        flexShrink={0}
        sx={{
          svg: {
            color: 'main',
          },
        }}
      >
        {isOpened && <CloseIcon />}
        {!isOpened && <ArrowIcon />}
      </Box>
      <Box
        sx={{
          transition: 'all 0.15s ease',
          transitionDelay: isOpened ? '1s' : '0s',
          display: isOpened ? 'block' : 'none',
          height: isOpened ? '16px' : 0,
        }}
      >
        <Typography
          color='text.secondary'
          sx={{
            userSelect: 'none',
          }}
        >
          Menu
        </Typography>
      </Box>
      {!isOpened && (
        <Box width={24} height={24} flexShrink={0}>
          <BurgerIcon />
        </Box>
      )}
    </Stack>
  ) : (
    <>
      <NavLink to={data.link} onClick={handleArrowClick}>
        {({ isActive }) => (
          <Stack
            direction='row'
            alignItems='center'
            justifyContent={!isOpened && 'center'}
            gap={1}
            position='relative'
            px={3}
            py={1.5}
            sx={{
              transition: 'background 0.15s',
              bgcolor: isActive ? 'main' : 'transparent',
              '&:hover': !isActive && {
                bgcolor: 'background.secondary',
              },
            }}
          >
            <Stack alignItems='center' direction='row' gap={1}>
              {!isBottom && (
                <Box
                  width={24}
                  height={24}
                  color={isActive ? 'text.primary' : 'text.secondary'}
                  ref={data.items && arrowRef}
                  flexShrink={0}
                  sx={{
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                    borderRadius: '4px',
                    '&:hover': data.items && {
                      bgcolor: 'background.tertiary',
                    },
                    svg: {
                      transition: 'transform 0.15s',
                      pointerEvents: 'none',
                      transform: isOpenedInner ? 'rotate(90deg)' : 'none',
                    },
                  }}
                >
                  {data.items && <ArrowIcon />}
                </Box>
              )}

              {!isOpened && (
                <Box
                  width={24}
                  height={24}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    svg: {
                      width: 20,
                      height: 20,
                    },
                  }}
                >
                  {data.icon || <DashboardIcon />}
                </Box>
              )}
            </Stack>
            <Box
              sx={{
                transition: 'all 0.15s ease',
                transitionDelay: isOpened ? '1s' : '0s',
                display: isOpened ? 'block' : 'none',
                height: isOpened ? '16px' : 0,
                pointerEvents: isActive ? 'none' : 'auto',
              }}
            >
              <Typography
                sx={{
                  transition: 'color 0.15s ease',
                  color: isActive ? 'text.primary' : 'text.secondary',
                  userSelect: 'none',
                }}
                whiteSpace='nowrap'
              >
                {data.title}
              </Typography>
            </Box>
          </Stack>
        )}
      </NavLink>
      <Stack display={isOpenedInner ? 'flex' : 'none'}>
        {data.items && data.items.map(item => <SidebarItem key={item.title} data={item} isOpened={isOpened} />)}
      </Stack>
    </>
  )
}
