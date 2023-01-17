import { RouterProvider } from "react-router-dom"
import './styles/App.css'
import routes from './config/route'

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
