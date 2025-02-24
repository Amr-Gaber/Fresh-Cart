import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flowbite/dist/flowbite.min.js'
import CounterContextProvider from './Context/counterContext.jsx'
import TokenContextProvider from './Context/tokenContext.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './Context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import WishContextProvider from './Context/wishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ToastContainer/>
  <TokenContextProvider>
    <CartContextProvider>
      <WishContextProvider>
      <CounterContextProvider>
<App />

</CounterContextProvider>
      </WishContextProvider>
 
</CartContextProvider>
  </TokenContextProvider>
  </StrictMode>,
  

)
