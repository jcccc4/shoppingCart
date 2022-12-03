import {render, screen } from'@testing-library/react';
import Home from './pages/home/Home'
import ShopPage from './pages/store/Store'

// test('renders learn react link',() =>{
//     render(<App />);
//     const linkElement = screen.getByText(/Shopping Cart/i);
//     expect(linkElement).toBeInTheDocument();
// })

test('renders Home Component',() =>{
    render(<Home/>);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders Home Component',() =>{
    render(<Store/>);
    const linkElement = screen.getByText(/Store/i);
    expect(linkElement).toBeInTheDocument();
})