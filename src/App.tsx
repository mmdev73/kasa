import { Outlet, RouterProvider, createBrowserRouter, useRouteError, defer } from 'react-router-dom'
import { mocked_datas } from './__mocks__/mocked_datas'
import { LogementInterface } from './assets/interfaces'
import Menu from './componnents/Menu'
import Footer from './componnents/Footer'
import ErrorPage from './pages/ErrorPage'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import { cLog } from './assets/functions'

/*
* Layout() arrow function
*
* @return JSX/TSX Layout componnent
*/
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

/*
* Error() arrow function
*
* @return JSX/TSX Error componnent
*/
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

/*
* getData() arrow function
* @param <any> link to datas
* @param <number|null> if nedded the id of selected habitation - default : null
* @return js object containing mocked datas
*/
const getDataMocked = (mock:any,id:string|null = null) => {
  cLog('mocked data used',4)
  if(id === null){
    cLog('no id provided',4)
    const datas:LogementInterface[] = mock
    return datas
  }
  cLog(`id provided : ${id}`,4)
  const datas:LogementInterface[] = mock.filter( (logement:LogementInterface) => logement.id === id)
  return datas
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
          const datas:LogementInterface[] = getDataMocked(mocked_datas)
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
              const datas:LogementInterface[] = getDataMocked(mocked_datas,params.id)          
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

