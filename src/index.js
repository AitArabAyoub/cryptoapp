import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import Exchanges from './components/Exchanges/Exchanges';
import Coins from './components/Coins/Coins';
import News from './components/News/News';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(    
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='exchanges' element={<Exchanges/>}/>
    <Route path='coins' element={<Coins/>}>
      <Route path=':coinId' element = {<Coins/>}/>
    </Route>
    <Route path='news' element={<News/>}/>
  </Route>


  ),
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>
) ;


reportWebVitals();
