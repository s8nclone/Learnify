import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import MainPage from './pages/MainPage.jsx'
// import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
// import BlogPage from './pages/BlogPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import { ContextProvider } from './hooks/context.jsx'
import Login from './components/Login/Login.jsx'
import ForgotPassword from './components/Login/ForgotPassword/ForgotPassword.jsx'
import ForgotPasswordStepOne from './components/Login/ForgotPassword/ForgotPasswordStepOne.jsx'
import ForgotPasswordStepTwo from './components/Login/ForgotPassword/ForgotPasswordStepTwo.jsx'
import ForgotPasswordStepThree from './components/Login/ForgotPassword/ForgotPasswordStepThree.jsx'
import ForgotPasswordStepFour from './components/Login/ForgotPassword/ForgotPasswordStepFour.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "courses",
        element: <CoursesPage />
      },
      // {
      //   path: "home",
      //   element: <HomePage />
      // },
      
      // {
      //   path: "blog",
      //   element: <BlogPage />
      // },
      {
        
        path: "aboutus",
        element: <AboutUsPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
        children: [
          {
            path: "/login/forgotpassword",
            element: <ForgotPasswordStepOne />
          },
          {
            path: "/login/forgotpassword/2",
            element: <ForgotPasswordStepTwo />
          },
          {
            path: "/login/forgotpassword/3",
            element: <ForgotPasswordStepThree />
          },
          {
            path: "/login/forgotpassword/complete",
            element: <ForgotPasswordStepFour />
          }
        ]
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/dashboard",
    element: <DashBoard />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider >
      <RouterProvider router={route}/>
    </ContextProvider>
  </React.StrictMode>,
)
