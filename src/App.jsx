import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { MyDashboard } from '@/modules/MyDashboard/index.js'
import { Header } from '@/components/Header/Header.jsx'
import { MainLayout } from '@/components/MainLayout/MainLayout.jsx'
import { OrderManagement } from '@/modules/OrderManagement/index.js'
import { OrderManagementEdit } from '@/modules/OrderManagementEdit/index.js'
import { Login } from '@/modules/Login/index.js'

export const App = () => {
  const location = useLocation()
  return (
    <div className='app'>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route
          path='/dashboard'
          element={
            <MainLayout>
              <MyDashboard />
            </MainLayout>
          }
        />
        <Route path='/order-management' element={<OrderManagement />} />
        <Route path='/order-management/edit' element={<OrderManagementEdit />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </div>
  )
}
