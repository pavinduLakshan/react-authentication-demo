import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  signInRedirectURL: "http://localhost:5173",
  signOutRedirectURL: "http://localhost:5173",
  clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
  baseUrl: `https://api.asgardeo.io/t/${import.meta.env.VITE_ASGARDEO_ORG_NAME}`,
  scope: [ "openid","profile" ]
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
