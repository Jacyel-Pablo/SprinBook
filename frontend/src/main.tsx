import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Dashboard from './paginas/dashboard'
import Leitura from './paginas/leitura'

const rotas = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/cadastro",
      element: <Cadastro/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/leitura",
      element: <Leitura/>
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)
