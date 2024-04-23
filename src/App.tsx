import { Outlet, RouterProvider, createBrowserRouter, useRouteError, defer } from 'react-router-dom'
import { mocked_datas } from './__mocks__/mocked_datas'
import { LogementInterface } from './assets/interfaces'
import Menu from './componnents/Menu'
import Footer from './componnents/Footer'
import ErrorPage from './pages/ErrorPage'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'

const Layout = () =>{
  return <>
    <main className="main">
      <Menu />        
      <div className="content">
        <Outlet />
      </div>
    </main>
    <Footer />      
  </>
}

const Error = () =>{
  const error = useRouteError()
  return <>
    <main className="main">
      <Menu />        
      <div className="content">
        <ErrorPage error={error}/>
      </div>
    </main>
    <Footer />      
  </>
}

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout />,
    errorElement:<Error />,
    children: [
      {
        path:'',
        loader: () => {
          const datas:LogementInterface[] = mocked_datas
          return defer({datas})
        },
        element:<Accueil />
      },
      {
        path:'/',
        children: [
          {
            path:'a-propos',
            element:<Apropos />
          },
          {
            path:'logements/:id',
            loader: ({params}) => {
              const datas:LogementInterface[] = mocked_datas.filter( (logement:LogementInterface) => logement.id === params.id)            
              return defer({datas})
            },
            element: <Logement />,
            errorElement: <ErrorPage />
          },
          {
            path:'error',
            element:<ErrorPage />
          }
        ]
      }
    ]
  },
  {
    path:'*',
    element: <Error />
  }
])

function App() { 
  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App

