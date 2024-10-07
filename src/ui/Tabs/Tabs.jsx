import { Box, Stack, Typography } from '@mui/material'

export const Tabs = ({ data, activeTab, setActiveTab }) => {
  return (
    <Stack
      direction='row'
      gap={1}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'background.tertiary',
        overflowY: 'hidden',
        overflowX: 'auto',
      }}
    >
      {data?.map((item, idx) => {
        const isActive = item.value === activeTab

        return (
          <Stack
            py={1}
            px={2}
            sx={{
              cursor: 'pointer',
              bgcolor: 'background.secondary',
              borderRadius: '4px 4px 0 0',
              border: '1px solid',
              borderColor: 'background.tertiary',
              mb: '-1px',
            }}
            key={idx}
            position='relative'
            onClick={() => setActiveTab(item.value)}
          >
            <Typography color={isActive ? 'text.primary' : 'text.tertiary'}>{item.title}</Typography>
            {isActive && <Box width='100%' height={3} bgcolor='main' position='absolute' bottom={0} left={0} />}
          </Stack>
        )
      })}
    </Stack>
  )
}
