import { createBrowserRouter } from 'react-router-dom'

import { SimulationFormPage } from './pages/SimulationFormPage'
import { SimulationResultsPage } from './pages/SimulationResultsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SimulationFormPage />,
  },
  {
    path: '/resultado',
    element: <SimulationResultsPage />,
  },
])