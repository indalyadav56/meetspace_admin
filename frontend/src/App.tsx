import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import NavBar from './components/NavBar'

// Pages
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      {/* Individual Page Components Display Here */}
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
