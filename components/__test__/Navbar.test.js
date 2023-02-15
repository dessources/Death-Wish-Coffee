import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Navbar'
import { SessionProvider } from 'next-auth/react'
import store from '../../redux/store'
import { Provider } from 'react-redux'



describe('Navbar', () => {
    test('should render a subscription Link', () => {
        render(<Navbar/>)
            {/* <Provider store={store}>
                <SessionProvider>
                    <Navbar />
                </SessionProvider>
            </Provider> */}
           
        
        const linkElement = screen.getByText(/subscription/i)
        expect(linkElement).toBeInTheDocument()
    })
})