import { BlogIcon } from '@/assets/icons/BlogIcon.jsx'
import { HelpIcon } from '@/assets/icons/HelpIcon.jsx'
import { DashboardIcon } from '@/assets/icons/DashboardIcon.jsx'
import { BellIcon } from '@/assets/icons/BellIcon.jsx'
import { ChainIcon } from '@/assets/icons/ChainIcon.jsx'
import { DeliveryIcon } from '@/assets/icons/DeliveryIcon.jsx'
import { TransactionIcon } from '@/assets/icons/TransactionIcon.jsx'
import { OrderManagementIcon } from '@/assets/icons/OrderManagementIcon.jsx'
import { DataManagementIcon } from '@/assets/icons/DataManagementIcon.jsx'
import { SourceManagementIcon } from '@/assets/icons/SourceManagementIcon.jsx'
import { AnalyticsInsightsIcon } from '@/assets/icons/AnalyticsInsightsIcon.jsx'
import { ForecastingIcon } from '@/assets/icons/ForecastingIcon.jsx'
import { ReportsIcon } from '@/assets/icons/ReportsIcon.jsx'

export const mainMenu = [
  {
    title: 'My Dashboard',
    link: '/dashboard',
    icon: <DashboardIcon />,
    items: [
      {
        title: 'Alerts & Notifications',
        link: '/dashboard/1',
        icon: <BellIcon />,
      },
      {
        title: 'Supply Chain Alerts',
        link: '/dashboard/2',
        icon: <ChainIcon />,
      },
      {
        title: 'Delivery Issues',
        link: '/dashboard/3',
        icon: <DeliveryIcon />,
      },
      {
        title: 'Overdue Transactions',
        link: '/dashboard/4',
        icon: <TransactionIcon />,
      },
    ],
  },
  {
    title: 'Order Management',
    link: '/order-management',
    icon: <OrderManagementIcon />,
    items: [
      {
        title: 'Order Management 1',
        link: '/order-management/1',
      },
    ],
  },
  {
    title: 'Data Management',
    link: '/data-management',
    icon: <DataManagementIcon />,
    items: [
      {
        title: 'Data Management 1',
        link: '/data-management/1',
      },
    ],
  },
  {
    title: 'Source Management',
    link: '/source-management',
    icon: <SourceManagementIcon />,
    items: [
      {
        title: 'Source Management 1',
        link: '/source-management/1',
      },
    ],
  },
  {
    title: 'Analytics Insights',
    link: '/analytics-insights',
    icon: <AnalyticsInsightsIcon />,
    items: [
      {
        title: 'Analytics Insights 1',
        link: '/analytics-insights/1',
      },
    ],
  },
  {
    title: 'Forecasting',
    link: '/forecasting',
    icon: <ForecastingIcon />,
  },
  {
    title: 'Reports',
    link: '/reports',
    icon: <ReportsIcon />,
  },
]

export const systemMenu = [
  {
    title: 'Company Blog',
    link: '/blog',
    icon: <BlogIcon />,
  },
  {
    title: 'Help Desk',
    link: '/help',
    icon: <HelpIcon />,
  },
]
