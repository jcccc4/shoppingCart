import {render, screen } from'@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Checkout from './pages/checkout/Checkout';

test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
  
    expect(screen.getByText(/You are at Home./i)).toBeInTheDocument()
    
    await user.click(screen.getAllByText(/Home/i)[0])
    expect(screen.getByText(/You are at Home./i)).toBeInTheDocument()
    
   
    await user.click(screen.getByText(/Checkout/i))
    expect(screen.getByText(/You are at the Checkout Page./i)).toBeInTheDocument()

})

test('Store has the products', async () =>{
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    await user.click(screen.getAllByText(/Store/i)[0])
    expect(screen.getAllByText(/Red/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Image/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Price/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Add to Cart/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/</i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/1/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/>/i)[0]).toBeInTheDocument()
})
test('Adding a Count in the Checkout Page', async () =>{
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    await user.click(screen.getAllByText(/Store/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getByText(/Checkout/i))
    
    expect(screen.getAllByText(/3/i)[0]).toBeInTheDocument()

})

test('Adding a Multiple item in the Store Page', async () =>{
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    await user.click(screen.getAllByText(/Store/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[0])
    await user.click(screen.getAllByText(/Add to Cart/i)[2])
    await user.click(screen.getAllByText(/Add to Cart/i)[2])
    await user.click(screen.getByText(/Checkout/i))
    
    expect(screen.getAllByText(/3/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/2/i)[0]).toBeInTheDocument()
})

test('Deducting a Product', async () =>{
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    await user.click(screen.getAllByText(/Store/i)[0])
    await user.click(screen.getAllByText(/>/i)[0])
    await user.click(screen.getAllByText(/>/i)[0])
    await user.click(screen.getAllByText(/</i)[0])
    expect(screen.getAllByText(/2/i)[0]).toBeInTheDocument()
})





test.skip('Adding Product Feature', async () =>{
    render(<App />, {wrapper: BrowserRouter})
    expect(screen.getAllByAltText(/Add Product/i)[0]).toBeInTheDocument()

})