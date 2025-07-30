import {createBrowserRouter , RouterProvider} from 'react-router-dom';

import { AppLayout } from './components/Layout/AppLayout';

import {Home} from './pages/Home';
import {Country} from './pages/Country';
import {CountryDetails} from './components/Layout/CountryDetails';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {ErrorPage } from './pages/ErrorPage';


import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
 
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:'about',
    element:<About/>,
  },{
    path:"contact",
    element:<Contact/>,
  },
  {
    path:"country",
    element:<Country/>,
  },
    {
    path:"country/:id",
    element:<CountryDetails/>,
  },
 ]}
])


function App() {
  return <RouterProvider router ={router}>

  </RouterProvider>
};

export default App;
