import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import store from './Redux/store'
// webvitals theo dõi đo lường các yếu tố ảnh hưởng đến người dùng
//  để dev có thể thực hiện các biện pháp tối ưu cải thiên
// import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
