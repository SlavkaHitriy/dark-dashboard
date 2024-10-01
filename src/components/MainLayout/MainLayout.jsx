import { Box } from '@mui/material'
import { Sidebar } from '@/components/Sidebar/index.js'

export const MainLayout = ({ children, withSidebar = true }) => {
  return (
    <div className='app-inner'>
      {withSidebar && <Sidebar />}
      <main className='main'>
        <Box width='100%' bgcolor='background.primary'>
          {children}
        </Box>
      </main>
    </div>
  )
}
