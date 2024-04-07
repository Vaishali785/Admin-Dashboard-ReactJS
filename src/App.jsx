import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import DetailPage from './pages/DetailPage/DetailPage'
import ListPage from './pages/ListPage/ListPage'


const routes = createBrowserRouter([
    { path: '/', element: <ListPage /> },
    { path: '/:orderId', element: <DetailPage /> }
])

function App() {
    return (
        <>
            <RouterProvider router={routes}>
            </RouterProvider>
        </>
    )
}

export default App
