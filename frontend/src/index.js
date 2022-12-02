import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import CartProvider from './context/CartProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <PayPalScriptProvider
    options={{ 'client-id': 'AXLncuPJpcGfhmhRDCjaX4lgkEGpc0Azhmjd8TMz5FvXVy5kfMBnhDngXZBf9E0io3wpLLj8KzE5nVMM' }}
  >
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </PayPalScriptProvider>
)
